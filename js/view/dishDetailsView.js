/** DishDetailsView Object constructor
 *
 * @param {jQuery object} container - references #dish-search
 * @param {Object} model - the reference to the Dinner Model
 */
var DishDetailsView = function (container, selectedDish) {
	var $dish = $("<div class='dish-content'><div class='dish-details'><h2>" + selectedDish.name + "</h2><img class='dish-image' src='./images/" + selectedDish.image + "'/><p>" + selectedDish.description + "</p><button class='btn btn--primary back-dish-display' >Back to Search</button><h2>Preparation</h2><p>" + selectedDish.description + "</p></div></div>");
	var $ingredients = $("<div class='dish-ingredients'><h3>Ingredients for 3 people</h3></div>");
	var $ingredientsList = $("<ul class='ingredients-list'></ul>");
	var totalPrice = 0;

	//TODO Refactor to use the getDishPrice
	for (var key in selectedDish.ingredients) {
		var $currentIngredient = selectedDish.ingredients[key];
		totalPrice += $currentIngredient.price;
		$ingredientsList.append($("<li class='ingredient'><span class='ingredient-quantity'>" + $currentIngredient.quantity + " " + $currentIngredient.unit + "</span><span class='ingredient-name'>" + $currentIngredient.name + "</span><span class='currency'>SEK " + $currentIngredient.price + "</span>"));
	}

	$ingredientsList.append($("<div class='ingredients-total'><button class='btn btn--primary'>Add to cart</button><span><strong>TOTAL:</strong> SEK " + totalPrice + "</span></div>"));
	$ingredients.append($ingredientsList);
	$dish.append($ingredients);

	container.html($dish);
}

