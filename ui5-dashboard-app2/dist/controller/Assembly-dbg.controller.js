sap.ui.define(
  ["ui5/dashboardapp/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("ui5.dashboardapp.controller.Assembly", {
      onInit: function () {
        console.log("Assembly Page");
      },
    });
  }
);
