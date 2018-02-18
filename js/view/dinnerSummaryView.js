/** DinnerSummaryView Object constructor
 *
 * @param {jQuery object} container - references #dinner-summary
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerSummaryView = function (container, model) {
	this.printDinner = container.find('#print-recipes');
	this.backEdit 	 = container.find('.back-edit');

	this.show = function() {
		container.addClass('main--show');
	};

	this.hide = function() {
		container.removeClass('main--show');
	};

	var render = function() {
		var menu = model.getFullMenu();
		var $dishConfirmSelected = container.find('.dish-confirm-selected');

		$dishConfirmSelected.html('');

		menu.map(function(dish) {
			var dishItem = new DishItemView($dishConfirmSelected, model, dish, true);
		});

		container.find('#confirm-price').text(model.getTotalMenuPrice());
	}

	model.addObserver(render);
}

