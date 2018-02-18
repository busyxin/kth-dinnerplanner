/** DishSearchView Object constructor
 *
 * @param {Object} view - references the dish
 * @param {Object} model - the reference to the Dinner Model
 * @param {Object} appController - the reference to the General Application Controller
 */
var DishDetailsController = function (view, model, appController) {
  view.container.on('click', '.back-edit', function() {
    appController.currentDishId = null;
    appController.changeTo('dishSearch');
  });

  view.container.on('click', '#add-to-cart', function() {
    var dishId = $(this).attr('data-dishid');
    appController.currentDishId = dishId;
    model.addDishToMenu(dishId);
  });
}