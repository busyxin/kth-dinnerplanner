/** DinnerSummaryItemView Object constructor
 *
 * @param {jQuery object} container - references .dinner-confirm
 * @param {Object} model - the reference to a Dinner Model
 */
var DinnerSummaryItemView = function (container, model, key) {
	var menu = model.getFullMenu();
	var currentPrice = model.getDishPrice(menu[key]);
	var $dish = $("<div class='dish-wrapper'><img class='dish-image' src='./images/" + menu[key].image + "'/><div class='dish-name'>" + menu[key].name + "</div><div>SEK " + currentPrice + "</div></div>");
	container.prepend($dish);
}

