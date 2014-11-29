define(["flight"], function(flight) {
	return flight.component(function() {
		this.after("initialize", function() {
			this.$node.html("Hello world!");
		});
	});
});