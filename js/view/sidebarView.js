/** SidebarView Object constructor
 *
 * @param {jQuery object} container - references the #sidebar container
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarView = function (container, model) {
  this.guestInput    = container.find('#guests-input');
  this.confirmDinner = container.find('#confirm-dinner');

  var menu = model.getFullMenu();

  menu.map(function(dish) {
    var sidebarItem = new SidebarItemView(container.find('.selected-dishes'), model, dish);
  });

  this.show = function() {
    container.addClass('sidebar--show');
  };

  this.hide = function() {
    container.removeClass('sidebar--show');
  };
}
