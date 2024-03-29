sap.ui.define(["sap/ui/core/UIComponent"], (UIComponent) => {
  "use strict";

  return UIComponent.extend("ui5.imgeditor.Component", {
    metadata: {
      interfaces: ["sap.ui.core.IAsyncContentCreation"],
      manifest: "json",
    },
    init() {
      // call the init function of the parent
      UIComponent.prototype.init.apply(this, arguments);
    },
  });
});
