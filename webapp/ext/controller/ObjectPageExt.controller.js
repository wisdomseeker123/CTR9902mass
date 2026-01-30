sap.ui.define([], function () {
  "use strict";
 
  return {
    /**
     * Called by manifest action press "onMassEdit"
     * The base mass controller provides the implementation.
     */
    onMassEdit: function (oEvent) {
      // Delegate to the MassEdit controller from reuse lib
      return sap.ui.controller("customer.mass9902.ext.controller.MassEdit", undefined, true)
        .onMassEdit(oEvent);
    },
 
    /**
     * Optional export navigation handler
     */
    onPrepareExportNavigation: function (oEvent) {
      return sap.ui.controller("customer.mass9902.ext.controller.MassEdit", undefined, true)
        .onPrepareExportNavigation(oEvent);
    }
  };
});