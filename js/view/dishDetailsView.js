/** DishDetailsView Object constructor
 *
 * @param {jQuery object} container - references #dish-search
 * @param {Object} model - the reference to the Dinner Model
 */
var DishDetailsView = function (container, model, appController) {
	this.container = container;

	this.show = function() {
		container.addClass('main--show');
		render();
	};

	this.hide = function() {
		container.removeClass('main--show');
	};

	var render = function() {
		if (!appController.currentDishId) return;

		var dish = model.getDish(appController.currentDishId);
		var guests = model.getNumberOfGuests();

		var $dish = $(`
			<div class='dish-content'>
				<div class='dish-details'>
					<h2>${dish.name}</h2>
					<img class='dish-image' src='./images/${dish.image}'/>
					<p>${dish.description}</p>
					<button class='btn btn--primary back-edit'>Back to Search</button>
					<h2>Preparation</h2>
					<p>${dish.description}</p>
				</div>
			</div>
		`);

		var $ingredients = $(`
			<div class='dish-ingredients'>
				<h3>Ingredients for ${model.getNumberOfGuests()} people</h3>
			</div>
		`);

		var $ingredientsList = $(`
			<ul class='ingredients-list'></ul>
		`);

		var $ingredientsTotal = $(`
			<div class='ingredients-total'>
				<button id='add-to-cart' class='btn btn--primary' data-dishid='${dish.id}'>Add to cart</button>
				<span><strong>TOTAL:</strong> SEK ${model.getDishPrice(dish) * guests}</span>
			</div>
		`);

		var createIngredient = function createIngredient(ingredient) {
			return $(`
				<li class='ingredient'>
					<span class='ingredient-quantity'>${ingredient.quantity * guests} ${ingredient.unit}</span>
					<span class='ingredient-name'>${ingredient.name}</span>
					<span class='currency'>SEK ${ingredient.price * guests}</span>
				</li>
			`);
		};

		dish.ingredients.map(function(ingredient) {
			$ingredientsList.append(createIngredient(ingredient));
		});

		$ingredientsList.append($ingredientsTotal);

		$ingredients.append($ingredientsList);

		$dish.append($ingredients);

		container.html($dish);
	};

	var update = function(result) {
		if (result.guests) render();
	}

	model.addObserver(update);

	render();
}
