/** DishSearchView Object constructor
 *
 * @param {jQuery object} container - references the #dish-details container
 * @param {Object} model - the reference to the Dinner Model
 */
var DishSearchView = function (container, model) {
	this.container = container;
	this.searchType = container.find('#search-type')
	this.searchFilter = container.find('#search-filter')
	this.searchSubmit = container.find('#search-submit');

	this.show = function() {
		container.addClass('main--show');
	};

	this.hide = function() {
		container.removeClass('main--show');
	};

	this.render = function(filteredDishes) {
		var $dishDisplay = container.find('.dish-display');

		$dishDisplay.html('');

		if (filteredDishes) {
			var dishes = filteredDishes;
		} else {
			var dishes = model.getEveryDish();
		}

		if (!dishes.length) {
			$dishDisplay.text('No dish found, try other filters.')

		} else {
			dishes.map(function(dish) {
				var dishItem = new DishItemView($dishDisplay, model, dish);
			});
		}
	}

	this.render();
}

