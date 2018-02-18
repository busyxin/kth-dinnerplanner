/** SidebarItemView Object constructor
 *
 * @param {jQuery object} container - references the .selected-dishes container
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarItemView = function (container, model, dish) {
  var newDishItem = $(`
		<li class='selected-dishes__item'>
			<span>${dish.name}</span><span>${model.getDishPrice(dish)}</span>
		</li>
	`);

  container.append(newDishItem);
}

