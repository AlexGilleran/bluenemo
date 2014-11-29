define(["flight", "lodash", "text!template/map-callout.html"], function(flight, _, callout) {
	"use strict";

	return flight.component(function() {
		this.defaultAttrs({
			canvasSelector: "#map-canvas"
		});

		this.onDataServed = function(event, data) {
			var latLongList = [];
			data.rows.forEach(function(row) {
				latLongList.push(new google.maps.LatLng(row.Latitude, row.Longitude))
			});

			var bounds = new google.maps.LatLngBounds ();
			latLongList.forEach(function(latLong) {
			  bounds.extend(latLong);
			});
			this.attr.map.fitBounds(bounds);

			var boatPath = new google.maps.Polyline({
				path: latLongList,
				geodesic: true,
				strokeColor: '#FF0000',
				strokeOpacity: 1.0,
				strokeWeight: 2
			});

			boatPath.setMap(this.attr.map);

			for (var i = 0; i < data.rows.length; i += 200) {
				var row = data.rows[i];

				var marker = new google.maps.Marker({
				    position: new google.maps.LatLng(row.Latitude, row.Longitude),
				    title: row.Latitude + " " + row.Longitude
				});

				google.maps.event.addListener(marker, "mouseover", this.onMarkerHover.bind(this, row, marker));
				marker.setMap(this.attr.map);
			}
		};

		this.onMarkerHover = function(row, marker) {
			var content = _.template(callout, {row: row});
			console.log(content);

			var infoWindow = new google.maps.InfoWindow({
	      		content: content
			});

			google.maps.event.addListener(marker, "mouseout", function() {
				infoWindow.close();
			});

			infoWindow.open(this.attr.map, marker);
		};

		this.after("initialize", function() {
			this.on(document, "data-served", this.onDataServed);

			this.trigger("data-requested");

			var mapOptions = {
	          zoom: 8
	        };
	        this.attr.map = new google.maps.Map(this.select("canvasSelector")[0], mapOptions);
	    });
	});
});