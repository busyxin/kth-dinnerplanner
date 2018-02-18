/** DinnerPrintView Object constructor
 *
 * @param {jQuery object} container - references #dinner-print
 * @param {Object} model - the reference to the Dinner Model
 */
var DinnerPrintView = function (container, model) {
	this.backEdit = container.find('.back-edit');

	this.show = function() {
		container.addClass('main--show');
	};

	this.hide = function() {
		container.removeClass('main--show');
	};

	var render = function() {
		var $dishPrintRecipes = container.find('.dish-print-recipes');

		$dishPrintRecipes.html('');

		model.getFullMenu().map(function(dish) {
			var dinnerPrintItem = new DinnerPrintItemView($dishPrintRecipes, dish);
		});
	};

	model.addObserver(render);
}

