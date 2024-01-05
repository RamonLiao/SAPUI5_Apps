sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, History, Device, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.dashboardapp.controller.App", {
      onInit() {
        this.getView().addStyleClass(
          this.getOwnerComponent().getContentDensityClass()
        );

        let bIsPhone = Device.system.phone;
        const svgLogo = sap.ui.require.toUrl(
          "ui5/dashboardapp/images/sap-logo.svg"
        );

        this.getView().setModel(
          new JSONModel({
            imageWidth: bIsPhone ? "1.5em" : "3em",
            svgLogo: svgLogo,
          }),
          "logoImg"
        );

        let oPagesModel = new JSONModel({
          SelectedPageUrl: "home",
          Pages: [
            { PageUrl: "home", PageName: "Home" },
            { PageUrl: "overview", PageName: "Overview" },
            { PageUrl: "assembly", PageName: "Assembly" },
            { PageUrl: "contact", PageName: "Contact" },
          ],
        });

        this.getView().setModel(oPagesModel, "pages");
      },

      onNavBack() {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("overview", {}, true);
        }
      },

      onNavToPage(oEvent) {
        const sToPage = oEvent
          .getParameters()
          .selectedItem.getBindingContext("pages")
          .getProperty("PageUrl");
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo(sToPage, {}, true);
      },
    });
  }
);
