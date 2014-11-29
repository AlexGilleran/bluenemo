define(["flight"], function(flight) {
	return flight.component(function() {
		this.defaultAttrs({
			canvasSelector: "#map-canvas"
		});

		this.onDataServed = function(event, data) {
			data.rows.forEach(function(row) {
				var marker = new google.maps.Marker({
				    position: new google.maps.LatLng(row.Latitude, row.Longitude),
				    map: this.attr.map,
				    title:"Hello World!"
				});
			}, this);
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