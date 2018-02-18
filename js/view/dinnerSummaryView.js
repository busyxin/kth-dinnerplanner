/** DinnerSummaryView Object constructor
 *
 * @param {jQuery object} container - references #dinner-summary
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerSummaryView = function (container, model) {
	var menu = model.getFullMenu();

	this.printDinner = container.find('#print-recipes');
	this.backEdit 	 = container.find('.back-edit');

	this.render = function() {
		menu.map(function(dish) {
			var dishItem = new DishItemView(container.find('.dish-confirm'), dish, true);
		});

		container.find('#confirm-price').text(model.getTotalMenuPrice());
	}

	this.render();

	this.show = function() {
		container.addClass('main--show');
	};

	this.hide = function() {
		container.removeClass('main--show');
	};
}

