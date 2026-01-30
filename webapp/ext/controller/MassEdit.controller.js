sap.ui.define([
  "sap/nw/core/md/mdc/reuse/lib/mass/controller/MassEdit.controller"
], function (BaseMassEditController) {
  "use strict";
 
  return BaseMassEditController.extend("customer.mass9902.ext.controller.MassEdit", {
    /**
     * Return mapping of facet IDs to active table names.
     * facetId keys must match the facet IDs used in the Object Page sections.
     */
    getActiveTableNamesForFacets: function () {
      return {
//        GeneralFacet: ["GeneralTable"],
//        PlantsFacet: ["PlantsTable", "StorageLocationsTable"]
      };
    }
  });
});