/** SidebarView Object constructor
 *
 * @param {jQuery object} container - references the #sidebar container
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarView = function (container, model) {
  // Exposes the #guests-input button, #confirm-dinner button,
  // .selected-dishes container for the SidebarController to access
  this.guestInput     = container.find('#guests-input');
  this.confirmDinner  = container.find('#confirm-dinner');
  this.selectedDishes = container.find('.selected-dishes');

  // Method to show the SidebarView using css via class appending
  this.show = function() {
    container.addClass('sidebar--show');
  };

  // Method to hide the SidebarView using css via class remova
  this.hide = function() {
    container.removeClass('sidebar--show');
  };

  // Render method
  var render = function() {
    // Gets the 3 course menu from the Dinner model
    var menu = model.getFullMenu();

    // Finds the .selected-dishescontainer and the #confirm-dinner button
    var $selectedDishes = container.find('.selected-dishes');
    var $confirmDinner  = container.find('#confirm-dinner');

    // Flushes old content from .selected-dishes
    $selectedDishes.html('');

    // Hide #confirm-dinner button when there are no menu
    if (!menu.length) {
      $confirmDinner.hide();

    // If there are menu dishes to display in the sidebar
    // iterate through the menu dishes and create for each a sidebar item 
    } else {
      menu.map(function(dish) {
        var sidebarItem = new SidebarItemView($selectedDishes, model, dish);
      });

      // Show confirm button
      $confirmDinner.show();
    }
  };

  // Update method that triggers render when
  // the 3 course menu change or the number of guests gets updated 
  var update = function(result) {
    if (result.menu || result.guests) render();
  }

  // Registers the update method to be executed on notifyObservers
  model.addObserver(update);
}
