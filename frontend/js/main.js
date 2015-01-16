requirejs.config({
	baseUrl: 'js',
	paths: {
		lib: "../lib",
		flight: "../lib/flight",
		lodash: "../lib/lodash",
		moment: "../lib/moment",
		template: "../template"
	}
});

define(["view/map-view", "data/fusion-data", "view/parameters-view"], function(mapView, fusionData, paramsView) {
	var displayParams = ["Latitude", "Longitude"];

	fusionData.attachTo($(document));
	mapView.attachTo($("#map-view"), {displayParams: displayParams});
	paramsView.attachTo($("#parameters-view"), {displayParams: displayParams});
});