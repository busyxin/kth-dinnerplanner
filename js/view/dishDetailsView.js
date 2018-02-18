/** DishDetailsView Object constructor
 *
 * @param {jQuery object} container - references #dish-search
 * @param {Object} model - the reference to the Dinner Model
 */
var DishDetailsView = function (container, model, dish) {
	this.render = function() {

		if (!dish) return

		var $dish = $(`
			<div class='dish-content'>
				<div class='dish-details'>
					<h2>${dish.name}</h2>
					<img class='dish-image' src='./images/${dish.image}'/>
					<p>${dish.description}</p>
					<button class='btn btn--primary back-dish-display'>Back to Search</button>
					<h2>Preparation</h2>
					<p>${dish.description}</p>
				</div>
			</div>
		`);

		var $ingredients = $(`
			<div class='dish-ingredients'>
				<h3>Ingredients for 3 people</h3>
			</div>
		`);

		var $ingredientsList = $(`
			<ul class='ingredients-list'></ul>
		`);

		var $ingredientsTotal = $(`
			<div class='ingredients-total'>
				<button class='btn btn--primary'>Add to cart</button>
				<span><strong>TOTAL:</strong> SEK ${model.getTotalMenuPrice()}</span>
			</div>
		`);

		var createIngredient = function createIngredient(ingredient) {
			return $(`
				<li class='ingredient'>
					<span class='ingredient-quantity'>${ingredient.quantity} ${ingredient.unit}</span>
					<span class='ingredient-name'>${ingredient.name}</span>
					<span class='currency'>SEK ${ingredient.price}</span>
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
	}

	this.show = function() {
		container.addClass('main--show');
		this.render();
	};

	this.hide = function() {
		container.removeClass('main--show');
	};

	this.render();
}
