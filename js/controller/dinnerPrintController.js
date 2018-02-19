/** DinnerPrintController Object constructor
 *
 * @param {Object} view - references the DinnerPrintView
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerPrintController = function (view, appController) {
  // Adds a click event listener to the .back-edit button to transition back to the DishSearchView
  view.backEdit.on('click', function() {
    appController.changeTo('dishSearch');
  });
}