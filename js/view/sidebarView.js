/** SidebarView Object constructor
 *
 * @param {jQuery object} container - references the #sidebar container
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarView = function (container, model) {
  this.guestInput     = container.find('#guests-input');
  this.confirmDinner  = container.find('#confirm-dinner');
  this.selectedDishes = container.find('.selected-dishes');

  this.show = function() {
    container.addClass('sidebar--show');
  };

  this.hide = function() {
    container.removeClass('sidebar--show');
  };

  var render = function() {
    var $selectedDishes = container.find('.selected-dishes');
    var $confirmDinner  = container.find('#confirm-dinner');

    var menu = model.getFullMenu();
    $selectedDishes.html('');

    if (!menu.length) {
      $confirmDinner.hide();

    } else {
      menu.map(function(dish) {
        var sidebarItem = new SidebarItemView($selectedDishes, model, dish);
      });

      $confirmDinner.show();
    }
  };

  var update = function(result) {
    if (result.menu || result.guests) render();
  }

  render(model.getFullMenu());

  model.addObserver(update);
}
