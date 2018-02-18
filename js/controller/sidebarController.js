/** DishSearchView Object constructor
 *
 * @param {Object} view - references the sideBarView
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarController = function (view, model, appController) {
  view.guestInput.on('keyup mouseup', function() {
    model.setNumberOfGuests($(this).val());
  });

  view.selectedDishes.on('click', '.remove-dish', function() {
    var dishId = $(this).attr('data-dishid');
    var dish = model.getDish(dishId);

    if (window.confirm(`Are you sure you want to remove ${dish.name} from the menu?`)) {
      model.removeDishFromMenu(dish.type);
    }
  });

  view.confirmDinner.on('click', function() {
    appController.changeTo('dinnerSummary');
  });
}
