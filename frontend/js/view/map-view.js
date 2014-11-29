define(["flight"], function(flight) {
	return flight.component(function() {
		this.defaultAttrs({
			canvasSelector: "#map-canvas"
		});

		this.after("initialize", function() {
			var mapOptions = {
	          center: { lat: -34.397, lng: 150.644},
	          zoom: 8
	        };
	        var map = new google.maps.Map(this.select("canvasSelector")[0], mapOptions);
	    });
	});
});