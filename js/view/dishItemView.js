/** DishItemView Object constructor
 *
 * @param {jQuery object} container - references the .dish-display container
 * @param {Object} dish - the reference to a dish Object
 * @param {Boolean} withPrice - when true, display price
 */
var DishItemView = function (container, dish, withPrice) {
	var newDishItem = $(`
		<div class='dish-wrapper' data-dishid='${dish.id}'>
			<img class='dish-image' src='./images/${dish.image}'/>
			<div class='dish-name'>${dish.name}</div>
		</div>
	`);

	container.append(newDishItem);
}
