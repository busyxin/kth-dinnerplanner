/** DinnerPrintView Object constructor
 *
 * @param {jQuery object} container - references #dinner-print
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerPrintView = function (container, model) {
	var menu = model.getFullMenu();

	for (var key in menu) {
		new DinnerPrintItemView(container.find('.dish-print-recipes'), menu[key]);
	}
}

