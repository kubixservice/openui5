sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.m.sample.MultiComboBoxTwoColumnsLayout.Component", {

		metadata : {
			rootView : {
				"viewName": "sap.m.sample.MultiComboBoxTwoColumnsLayout.Page",
				"type": "XML",
				"async": true
			},
			dependencies : {
				libs : [
					"sap.m",
					"sap.ui.layout"
				]
			},
			config : {
				sample : {
					stretch : true,
					files : [
						"Page.view.xml",
						"Page.controller.js"
					]
				}
			}
		}
	});

	return Component;

});
