/** DishSearchView Object constructor
 *
 * @param {Object} view - references the sideBarView
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerSummaryController = function (view, model, appController) {
  view.backEdit.on('click', function() {
    appController.changeTo('dishSearch');
  });

  view.printDinner.on('click', function() {
    appController.changeTo('dinnerPrint')
  });
}