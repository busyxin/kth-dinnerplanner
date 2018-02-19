/** DishSearchController Object constructor
 *
 * @param {Object} view - references the DishSearchView
 * @param {Object} model - the reference to the Dinner Model
 * @param {Object} appController - the reference to the General Application Controller
 */
var DishSearchController = function (view, model, appController) {
  // Adds a click event listener to the .dish-wrapper items (the dishes) to transition to their corresponding details
  // We use the specific jQuery .on function on the container to be able to detect the dynamically created elements
  // Reads the attribute data-dishid, updates the appController and transitions
  view.container.on('click', '.dish-wrapper', function() {
    appController.currentDishId = $(this).attr('data-dishid');
    appController.changeTo('dishDetails');
  });

  // Adds a click event listener to the #search-submit button to apply the filtering
  // Reads the value from the #search-filter textInput and the value from the #search-type select
  // Then it gets the filtered result frorm the model and re-renders the view with the new list of dishes
  view.searchSubmit.on('click', function() {
    var dishType = view.searchType.val();
    var dishFilter = view.searchFilter.val();
    var filteredDishes = model.getAllDishes(dishType, dishFilter);
    view.render(filteredDishes);
  });
}