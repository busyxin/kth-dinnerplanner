/** SidebarItemView Object constructor
 *
 * @param {jQuery object} container - references the .selected-dishes container
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarItemView = function (container, model, dish) {
  // Create the view for a dish item
  var newDishItem = $(`
    <li class='selected-dishes__item'>
      <span>${dish.title}</span><span>${model.getDishPrice(dish)} <span class='remove-dish selected-dishes__cross' data-dishid='${dish.id}'>&times;</span></span>
    </li>
  `);

  // Appends the above created element to the container .selected-dishes
  container.append(newDishItem);
}

