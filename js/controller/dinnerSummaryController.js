/** DinnerSummaryController Object constructor
 *
 * @param {Object} view - references the DinnerSummaryView
 * @param {Object} model - the reference to the Dinner Model
 * @param {Object} appController - the reference to the General Application Controller
 */
var DinnerSummaryController = function (view, model, appController) {
  // Adds a click event listener to the .back-edit button to transition back to the DishSearchView
  view.backEdit.on('click', function() {
    appController.changeTo('dishSearch');
  });

  // Adds a click event listener to the #print-recipes button to transition back to the DishSearchView
  view.printDinner.on('click', function() {
    appController.changeTo('dinnerPrint');
  });
}