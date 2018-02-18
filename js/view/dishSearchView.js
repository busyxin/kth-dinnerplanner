/** DishSearchView Object constructor
 *
 * @param {jQuery object} container - references the #dish-details container
 * @param {Object} model - the reference to the Dinner Model
 */
var DishSearchView = function (container, model) {
	this.container = container;

	var dishes = model.getEveryDish();

	for (var key in dishes) {
		new DishItemView(container.find('.dish-display'), dishes[key]);
	}

	this.show = function() {
		container.addClass('main--show');
	};

	this.hide = function() {
		container.removeClass('main--show');
	};
}

