/** DinnerSummaryView Object constructor
 *
 * @param {jQuery object} container - references #dinner-summary
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerSummaryView = function (container, model) {
	var menu = model.getFullMenu();
	var total = 0;

	for (var key in menu) {
		var currentPrice = model.getDishPrice(menu[key]);
		total += currentPrice;
		new DinnerSummaryItemView(container.find('.dish-confirm'), model, key);
	}

	container.find('.confirm-price').text(total);
}

