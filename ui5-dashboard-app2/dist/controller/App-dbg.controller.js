sap.ui.define(
  [
    "ui5/dashboardapp/controller/BaseController",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
  ],
  (BaseController, Device, JSONModel) => {
    "use strict";

    return BaseController.extend("ui5.dashboardapp.controller.App", {
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
            { PageUrl: "assembly", PageName: "Assembly" },
            { PageUrl: "contact", PageName: "Contact" },
          ],
        });

        this.getView().setModel(oPagesModel, "pages");
      },

      onNavToPage(oEvent) {
        const sToPage = oEvent.getParameter("selectedItem").getKey();
        //   .getParameters()
        //   .selectedItem.getBindingContext("pages")
        //   .getProperty("PageUrl");
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo(sToPage, {}, true);
      },
    });
  }
);
