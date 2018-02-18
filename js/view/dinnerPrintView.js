/** DinnerPrintView Object constructor
 *
 * @param {jQuery object} container - references #dinner-print
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerPrintView = function (container, model) {
	var menu = model.getFullMenu();

	this.backEdit = container.find('.back-edit');

	menu.map(function(dish) {
		var dinnerPrintItem = new DinnerPrintItemView(container.find('.dish-print-recipes'), dish);
	});

	this.show = function() {
		container.addClass('main--show');
	};

	this.hide = function() {
		container.removeClass('main--show');
	};
}

