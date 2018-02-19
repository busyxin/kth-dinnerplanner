/** DishDetailsView Object constructor
 *
 * @param {jQuery object} container - references #dish-search
 * @param {Object} model - the reference to the Dinner Model
 */
var DishDetailsView = function (container, model, appController) {
  // Exposes the #dish-search container for the DishDetailsController to access
  this.container = container;

  // Method to show the DishDetailsView using css via class appending
  this.show = function() {
    container.addClass('main--show');

    // Executes render to populate with the selected dish
    // This view doesn't have an initial render when this constructor gets called
    render();
  };

  // Method to hide the DishDetailsView using css via class removal
  this.hide = function() {
    container.removeClass('main--show');
  };

  // Render method
  var render = function() {
    // Prevent render when there is no currentDishId (viewing selected dish)
    if (!appController.currentDishId) return;

    // Gets dish from the Dinner model using the saved currentDishId
    // from the General Appplication controller
    var dish = model.getDish(appController.currentDishId);

    // Gets the number of guests from the Dinner model
    var guests = model.getNumberOfGuests();

    // Dynamically creates the different dish details view components
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

    // Update the container content with the Dish details elements
    container.html($dish);
  };

  // Update method, triggers render only when number of guests are updated
  var update = function(result) {
    if (result.guests) render();
  }

  // Registers the update method to be executed on notifyObservers
  model.addObserver(update);
}
