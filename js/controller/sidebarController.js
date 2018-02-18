/** DishSearchView Object constructor
 *
 * @param {Object} view - references the sideBarView
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarController = function (view, model, appController) {
  view.guestInput.on('change', function() {
    model.setNumberOfGuests($(this).val());
  });

  view.confirmDinner.on('click', function() {
    appController.changeTo('dinnerSummary');
  })
}
