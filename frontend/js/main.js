requirejs.config({
	baseUrl: 'js',
	paths: {
		lib: "../lib",
		flight: "../lib/flight"
	}
});

define(["view/map-view"], function(mapView) {
	mapView.attachTo($("#main"));
});