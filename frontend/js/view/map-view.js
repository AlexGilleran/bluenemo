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

			for (var i = 0; i < data.rows.length; i += 20) {
				var row = data.rows[i];
				    var image = {url: 'img/Empty.png',
				    // This marker is 20 pixels wide by 32 pixels tall.
				    size: new google.maps.Size(10, 11),
				    // The origin for this image is 0,0.
				    origin: new google.maps.Point(0,0),
				    // The anchor for this image is the base of the flagpole at 0,32.
				    anchor: new google.maps.Point(5, 5)}; 	

				var marker = new google.maps.Marker({
				    position: new google.maps.LatLng(row.Latitude, row.Longitude),
				    title: row.Latitude + " " + row.Longitude,
				    icon: image
				});

				google.maps.event.addListener(marker, "mouseover", this.onMarkerHover.bind(this, row, marker));
				marker.setMap(this.attr.map);
			}

			var row = data.rows[data.rows.length-1];
				    var image = {url: 'img/BoatMed.png',
				    // This marker is 20 pixels wide by 32 pixels tall.
				    size: new google.maps.Size(63, 67),
				    // The origin for this image is 0,0.
				    origin: new google.maps.Point(0,0),
				    // The anchor for this image is the base of the flagpole at 0,32.
				    anchor: new google.maps.Point(15, 52)}; 

			var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(row.Latitude, row.Longitude),
			    title: row.Latitude + " " + row.Longitude,
			    icon: image
			});

			marker.setMap(this.attr.map);

			
		};

		this.onMarkerHover = function(row, marker) {
			var info = {};

			this.attr.displayParams.forEach(function(param) {
				info[param] = row[param];
			});

			var content = _.template(callout, {row: info});

			var infoWindow = new google.maps.InfoWindow({
	      		content: content
			});

			google.maps.event.addListener(marker, "mouseout", function() {
				infoWindow.close();
			});

			infoWindow.open(this.attr.map, marker);
		};

		this.onParamsSelected = function(event, data) {
			this.attr.displayParams = data.params;
		};

		this.after("initialize", function() {
			this.on(document, "data-served", this.onDataServed);
			this.on(document, "params-selected", this.onParamsSelected);

	        this.attr.map = new google.maps.Map(this.select("canvasSelector")[0], {});
	    });
	});
});