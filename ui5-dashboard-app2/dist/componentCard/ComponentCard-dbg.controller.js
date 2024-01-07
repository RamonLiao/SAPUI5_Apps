sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "ui5/dashboardapp/model/formatter",
  ],
  function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("ui5.dashboardapp.componentCard.ComponentCard", {
      formatter: formatter,
      onInit: function () {
        this.getView().setModel(
          new JSONModel({
            notStarted: { percentValue: 12, value: 15 },
            inProgress: { percentValue: 25, value: 8 },
            completed: { percentValue: 74, value: 12 },
          }),
          "ordersStats"
        );

        this.getView().setModel(
          new JSONModel({
            notApproved: { percentValue: 18, value: 11 },
            approved: { percentValue: 32, value: 19 },
            completed: { percentValue: 85, value: 70 },
          }),
          "defectsStats"
        );

        this.getView().setModel(
          new JSONModel({
            openTasks: 4,
          }),
          "tasksStats"
        );
      },

      onRefresh: function (evt) {
        setTimeout(
          function () {
            this.byId("pullToRefresh").hide();
            //   this._pushNewProduct();
          }.bind(this),
          1000
        );
      },
    });
  }
);
