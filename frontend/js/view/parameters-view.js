define(["flight", "lodash", "text!template/parameters.html", "moment"], function(flight, _, template, newMoment) {
	"use strict";

	return flight.component(function() {
		this.defaultAttrs({
			excludeCols : {
				BoatSerialNo: true,
				TimeKey: true,
				Pic_Data: true
			},
			"datePickersSelector": "[type=date]",
			"fromDateSelector": "#from-date",
			"toDateSelector": "#to-date",
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
			this.trigger("data-requested", {
				fromDate: newMoment(this.select("fromDateSelector").val()),
				toDate: newMoment(this.select("toDateSelector").val())
			});
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
				"datePickersSelector": _.debounce(this.onDateChanged.bind(this), 1000),
				"paramsSelector": this.onParamsChanged
			});

			this.onDateChanged();
		});
	});
});