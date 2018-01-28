/** SidebarView Object constructor
 *
 * @param {jQuery object} container - references the #sidebar container
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarView = function (container, model) {
	var menu = model.getFullMenu();

	for (var key in menu) {
		new SidebarItemView(container.find('.selected-dishes'), model, key);
	}
}

