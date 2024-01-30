sap.ui.define(
  ["ui5/dashboardapp/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("ui5.dashboardapp.controller.SidePanel", {
      onInit() {
        let oSidePanel = this.byId("mySidePanel");
        oSidePanel.setSidePanelPosition("Left");
      },

      onToggle: function (e) {
        // var oPreventExpand = this.byId("preventExpand"),
        //   oPreventCollapse = this.byId("preventCollapse"),
        //   oItem = e.getParameter("item"),
        //   iItemIndex = oItem
        //     ? parseInt(oItem.getId().replace(/^\D+/g, ""))
        //     : -1,
        //   bExpanded = e.getParameter("expanded");
        // if (!bExpanded) {
        //   if (oPreventCollapse.getState()) {
        //     MessageToast.show("I am prevented COLLAPSE event");
        //     oPreventCollapse.setState(false);
        //     e.preventDefault();
        //   }
        // } else if (oPreventExpand.getState()) {
        //   MessageToast.show("I am prevented EXPAND event");
        //   oPreventExpand.setState(false);
        //   e.preventDefault();
        // } else if (iItemIndex > 1) {
        //   // destroy existing item content
        //   oItem.destroyContent();
        //   // then add new dynamically created content
        //   oItem.addContent(
        //     new Text({
        //       text:
        //         "Dynamically created content for item '" +
        //         oItem.getText() +
        //         "'",
        //     })
        //   );
        // }
      },
    });
  }
);
