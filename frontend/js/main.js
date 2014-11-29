requirejs.config({
	baseUrl: 'js',
	paths: {
		lib: "../lib",
		flight: "../lib/flight",
		lodash: "../lib/lodash",
		template: "../template"
	}
});

define(["view/map-view", "data/fusion-data"], function(mapView, fusionData) {
	fusionData.attachTo($(document));
	mapView.attachTo($("#map-view"));
});