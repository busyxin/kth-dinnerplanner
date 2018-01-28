/** DishItemView Object constructor
 *
 * @param {jQuery object} container - references the .dish-display container
 * @param {Object} dish - the reference to a dish Object
 */
var DishItemView = function (container, dish) {
	var newDishItem = $("<div class='dish-wrapper'><img class='dish-image' src='./images/" + dish.image + "'/><div class='dish-name'>" + dish.name + "</div></div>");
	container.append(newDishItem);
}
