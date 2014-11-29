define(["flight"], function(flight) {
	return flight.component(function() {
		this.defaultAttrs({
			canvasSelector: "#map-canvas"
		});

		this.onDataServed = function(event, data) {
			var latLongList = [];
			data.rows.forEach(function(row) {
				latLongList.push(new google.maps.LatLng(row.Latitude, row.Longitude))
			});

			var boatPath = new google.maps.Polyline({
				path: latLongList,
				geodesic: true,
				strokeColor: '#FF0000',
				strokeOpacity: 1.0,
				strokeWeight: 2
			});

			boatPath.setMap(this.attr.map);
		};

		this.after("initialize", function() {
			this.on(document, "data-served", this.onDataServed);

			this.trigger("data-requested");

			var mapOptions = {
	          center: { lat: -34.397, lng: 150.644},
	          zoom: 8
	        };
	        this.attr.map = new google.maps.Map(this.select("canvasSelector")[0], mapOptions);
	    });
	});
});