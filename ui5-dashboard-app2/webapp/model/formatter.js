sap.ui.define([], () => {
  "use strict";

  return {
    statusText(sStatus) {
      const oResourceBundle = this.getOwnerComponent()
        .getModel("i18n")
        .getResourceBundle();
      switch (sStatus) {
        case "A":
          return oResourceBundle.getText("invoiceStatusA");
        case "B":
          return oResourceBundle.getText("invoiceStatusB");
        case "C":
          return oResourceBundle.getText("invoiceStatusC");
        default:
          return sStatus;
      }
    },

    tasksState: function (iTask) {
      if (iTask == 0) {
        return "Success";
      } else if (iTask > 3) {
        return "Error";
      } else if (iTask > 0 && iTask <= 3) {
        return "Warning";
      } else {
        return "None";
      }
    },
  };
});
