sap.ui.define(
  ["ui5/dashboardapp/controller/BaseController", "sap/ui/model/json/JSONModel"],
  (BaseController, JSONModel) => {
    "use strict";

    return BaseController.extend("ui5.dashboardapp.controller.Dashboard", {
      onInit: function () {
        const imgUrl = sap.ui.require.toUrl(
          "ui5/dashboardapp/images/work-smart.jpg"
        );

        this.getView().setModel(
          new JSONModel({
            avatarImg: imgUrl,
          }),
          "images"
        );
      },
    });
  }
);
