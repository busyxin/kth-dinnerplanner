/** SidebarController Object constructor
 *
 * @param {Object} view - references the sideBarView
 * @param {Object} model - the reference to the Dinner Model
 * @param {Object} appController - the reference to the General Application Controller
 */
var SidebarController = function (view, model, appController) {
  // Adds a keyup and mouseup event listener to the #guests-input numberInput
  // and updates the number of guests in the model with the input value
  view.guestInput.on('keyup mouseup', function() {
    model.setNumberOfGuests($(this).val());
  });

  // Adds a click event listener to the .remove-dish button on each sidebar dish item
  // We use the specific jQuery .on function on the selectedDishes container to be able to detect the dynamically created elements
  // Gets a dish object from the model with the attribute data-dishid from the clicked button
  // Prompts a confirmation box to avoid erroneous removal
  // On confirm it removes the dish from the Dinner model menu
  view.selectedDishes.on('click', '.remove-dish', function() {
    var dishId = $(this).attr('data-dishid');
    var onSuccessCallback = function(dish) {
      if (window.confirm(`Are you sure you want to remove the dish from the menu?`)) {
        model.removeDishFromMenu(dish.dishTypes[0]);
      }
    }
    var onErrorCallback = function(error) {
      window.alert("The request has not been processed.")
    }
    var dish = model.getDish(dishId, onSuccessCallback);
  });

  // Adds a click event listener to the #confirm-dinner button to transition to the DinnerSummaryView
  view.confirmDinner.on('click', function() {
    appController.changeTo('dinnerSummary');
  });
}
