sap.ui.define(
  [
    "ui5/dashboardapp/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/DateFormat",
    "sap/m/MessageToast",
    "sap/ui/integration/library",
    "sap/ui/core/date/UI5Date",
  ],
  (
    BaseController,
    JSONModel,
    DateFormat,
    MessageToast,
    integrationLibrary,
    UI5Date
  ) => {
    "use strict";

    return BaseController.extend(
      "ui5.dashboardapp.controller.DashboardTabHome",
      {
        onInit() {
          var cardManifests = new JSONModel(),
            homeIconUrl = sap.ui.require.toUrl(
              "sap/ui/integration/sample/CardsLayout/images/CompanyLogo.png"
            ),
            date = DateFormat.getDateInstance({ style: "long" }).format(
              UI5Date.getInstance()
            );
          cardManifests.loadData(
            sap.ui.require.toUrl("ui5/dashboardapp/model/cardManifests.json")
          );
          console.log(cardManifests);
          this.getView().setModel(cardManifests, "manifests");
          this.getView().setModel(
            new JSONModel({
              homeIconUrl: homeIconUrl,
              date: date,
            })
          );
        },

        onAction: function (oEvent) {
          if (
            oEvent.getParameter("type") ===
            integrationLibrary.CardActionType.Navigation
          ) {
            MessageToast.show("URL: " + oEvent.getParameter("parameters").url);
          }
        },
      }
    );
  }
);
