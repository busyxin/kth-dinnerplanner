/** DinnerSummaryView Object constructor
 *
 * @param {jQuery object} container - references #dinner-summary
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerSummaryView = function (container, model) {
  // Exposes the #print-recipes and the .back-edit buttons
  // for the DinnerSummaryController to access
  this.printDinner = container.find('#print-recipes');
  this.backEdit 	 = container.find('.back-edit');

  // Method to show the DinnerSummaryView using css via class appending
  this.show = function() {
    container.addClass('main--show');
  };

  // Method to hide the DinnerSummaryView using css via class removal
  this.hide = function() {
    container.removeClass('main--show');
  };

  // Render method
  var render = function() {
    // Gets the 3 course menu from the Dinner model
    var menu = model.getFullMenu();

    // Finds the .dish-confirm-selected container and the .guest-amount text holder
    var $dishConfirmSelected = container.find('.dish-confirm-selected');
    var $guestAmount = container.find('.guest-amount');

    // Flushes old content from .dish-confirm-selected
    $dishConfirmSelected.html('');

    // Updates the content from .guest-amount with the correct number of guests
    $guestAmount.text(`${model.getNumberOfGuests()} people`);

    // Iterates through each dish from the 3 course menu
    // Each DishItemView will receive the corresponding dish
    // and will append the view on .dish-confirm-selected
    // and the 4th withPrice parameter is true to force the item to display the price
    menu.map(function(dish) {
      var dishItem = new DishItemView($dishConfirmSelected, model, dish, true);
    });

    // Updates the content from #confirm-price with the total menu price
    container.find('#confirm-price').text(model.getTotalMenuPrice());
  }

  // Executes initial render
  render();

  // Registers the render method to be executed on notifyObservers
  model.addObserver(render);
}

