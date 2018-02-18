/** DishSearchView Object constructor
 *
 * @param {Object} view - references the sideBarView
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerPrintController = function (view, appController) {
  view.backEdit.on('click', function() {
    appController.changeTo('dishSearch');
  });
}