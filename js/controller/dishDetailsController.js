/** DishDetailsController Object constructor
 *
 * @param {Object} view - references the DishDetailsView
 * @param {Object} model - the reference to the Dinner Model
 * @param {Object} appController - the reference to the General Application Controller
 */
var DishDetailsController = function (view, model, appController) {
  // Adds a click event listener to the .back-edit button to transition back to the DishSearchView
  view.container.on('click', '.back-edit', function() {
    appController.currentDishId = null;
    appController.changeTo('dishSearch');
  });

  // Adds a click event listener to the #add-to-cart button to add the currently viewed dish to the menu
  // We use the specific jQuery .on function on the container to be able to detect the dynamically created button
  // Reads the attribute data-dishid, updates the appController and updates the Dinner model menu
  view.container.on('click', '#add-to-cart', function() {
    var dishId = $(this).attr('data-dishid');
    appController.currentDishId = dishId;
    model.addDishToMenu(dishId);
  });
}