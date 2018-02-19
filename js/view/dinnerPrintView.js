/** DinnerPrintView Object constructor
 *
 * @param {jQuery object} container - references #dinner-print
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerPrintView = function (container, model) {
  // Exposes the .back-edit button for the DinnerPrintController to access
  this.backEdit = container.find('.back-edit');

  // Method to show the DinnerPrintView using css via class appending
  this.show = function() {
    container.addClass('main--show');
  };

  // Method to hide the DinnerPrintView using css via class removal
  this.hide = function() {
    container.removeClass('main--show');
  };

  // Render method
  var render = function() {
    // Gets the 3 course menu from the Dinner model
    var menu = model.getFullMenu();

    // Finds the .dish-print-recipes container and the .guest-amount text holder
    var $dishPrintRecipes = container.find('.dish-print-recipes');
    var $guestAmount = container.find('.guest-amount');

    // Flushes old content from .dish-print-recipes
    $dishPrintRecipes.html('');

    // Updates the content from .guest-amount with the correct number of guests
    $guestAmount.text(`${model.getNumberOfGuests()} people`);

    // Iterates through each dish from the 3 course menu
    // Each DinnerPrintItemView will receive the corresponding dish
    // and will append the view on .dish-print-recipes
    menu.map(function(dish) {
      var dinnerPrintItem = new DinnerPrintItemView($dishPrintRecipes, dish);
    });
  };

  // Executes initial render
  render();

  // Registers the render method to be executed on notifyObservers
  model.addObserver(render);
}

