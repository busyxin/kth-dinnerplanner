/** DishSearchView Object constructor
 *
 * @param {Object} view - references the dish
 * @param {Object} model - the reference to the Dinner Model
 * @param {Object} appController - the reference to the General Application Controller
 */
var DishSearchController = function (view, model, appController) {
  view.container.on('click', '.dish-wrapper', function() {
    appController.currentDishId = $(this).attr('data-dishid');
    appController.changeTo('dishDetails');
  });

  view.searchSubmit.on('click', function() {
    var dishType = view.searchType.val();
    var dishFilter = view.searchFilter.val();
    var filteredDishes = model.getAllDishes(dishType, dishFilter);
    view.render(filteredDishes);
  });
}