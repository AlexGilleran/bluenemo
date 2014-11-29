requirejs.config({
	baseUrl: 'js',
	paths: {
		lib: "../lib",
		flight: "../lib/flight"
	}
});

define(["view/map-view", "data/fusion-data"], function(mapView, fusionData) {
	fusionData.attachTo($(document));
	mapView.attachTo($("#map-view"));
});