define(["flight", "lodash", "text!template/parameters.html"], function(flight, _, template) {
	"use strict";

	return flight.component(function() {
		this.defaultAttrs({
			excludeCols : {
				BoatSerialNo: true,
				TimeKey: true,
				Pic_Data: true,
				Date_Time: true
			},
			"datePickersSelector": "[type=date]",
			"paramsSelector": "[type=checkbox]",
			"parametersContainerSelector": "#parameters-container"
		});

		this.onDataServed = function(view, data) {
			var columns = _.filter(data.columns, function(colName) {
				return !this.attr.excludeCols[colName];
			}, this);

			var checked = {};
			this.attr.displayParams.forEach(function(displayParam) {
				checked[displayParam] = true;
			});

			this.select("parametersContainerSelector").html(_.template(template, {columns: columns, checked: checked}));
		};

		this.onDateChanged = function() {

		};

		this.onParamsChanged = function() {
			var selectedParams = [];

			this.select("paramsSelector").each(function() {
				var $this = $(this);

				if ($this.is(":checked")) {
					selectedParams.push($this.attr("name"));
				}
			});

			this.trigger("params-selected", {
				params: selectedParams
			});
		};

		this.after("initialize", function() {
			this.on(document, "data-served", this.onDataServed);

			this.on("change", {
				"datePickersSelector": this.onDateChanged,
				"paramsSelector": this.onParamsChanged
			});
		});
	});
});