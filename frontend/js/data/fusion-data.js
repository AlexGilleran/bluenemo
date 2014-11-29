define(["flight"], function(flight) {
	return flight.component(function() {
		this.onDataRequested = function() {
			$.get("https://www.googleapis.com/fusiontables/v2/query?sql=SELECT+*+FROM+1NFVpw27C4ki7se6AR3yOiyakAStUuiiC2xYYd8-B+LIMIT+10&key=AIzaSyBq6tmLr4DUJaXxVfHLwdoLv5UxomLv4Pw")
				.done(this.onDataReceived.bind(this))
				.fail(this.onDataFailed.bind(this));
		};

		this.onDataReceived = function(data) {
			var output = [];

			// make data into something useful.
			data.rows.forEach(function(row) {
				var rowObj = {};

				for (i = 0; i < row.length; i++) {
					rowObj[data.columns[i]] = row[i];
				}

				output.push(rowObj);
			});

			this.trigger("data-served", {
				rows: output
			});
		};

		this.onDataFailed = function(data) {
			console.error("data failed");
		};

		this.after("initialize", function() {
			this.on(document, "data-requested", this.onDataRequested);
		});
	});
});