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

    // Add loader here
    container.html('LOADING...');

    // Gets the number of guests from the Dinner model
    var guests = model.getNumberOfGuests();

    var createIngredient = function createIngredient(ingredient) {
      return $(`
        <li class='ingredient'>
          <span class='ingredient-quantity'>${ingredient.amount * guests} ${ingredient.unit}s</span>
          <span class='ingredient-name'>${ingredient.name}</span>

        </li>
      `);
    };

    // Take out price now
    // <span class='currency'>SEK ${ingredient.price * guests}</span>

    var onSuccessCallback = function(dish) {
  
      // Dynamically creates the different dish details view components
      var $dish = $(`
        <div class='dish-content'>
          <div class='dish-details'>
            <h2>${dish.title}</h2>
            <img class='dish-image--big' src='${dish.image}'/>
            <p>${dish.instructions}</p>
            <button class='btn btn--primary back-edit'>Back to Search</button>
            <h2>Preparation</h2>
            <p>${dish.instructions}</p>
          </div>
        </div>
      `);
      
      var $ingredients = $(`
        <div class='dish-ingredients'>
          <h3>Ingredients for ${guests} people</h3>
        </div>
      `);

      var $ingredientsList = $(`
        <ul class='ingredients-list'></ul>
      `);

      var $ingredientsTotal = $(`
        <div class='ingredients-total'>
          <button id='add-to-cart' class='btn btn--primary' data-dishid='${dish.id}'>Add to cart</button>
          <span><strong>TOTAL:</strong> SEK ${model.getDishPrice(dish)}</span>
        </div>
      `);

      dish.extendedIngredients.map(function(ingredient) {
        $ingredientsList.append(createIngredient(ingredient));
      });

      $ingredientsList.append($ingredientsTotal);

      $ingredients.append($ingredientsList);

      $dish.append($ingredients);

      // Update the container content with the Dish details elements
      container.html($dish);
    }

    var onErrorCallback = function(error) {
      window.alert("The request has not been processed. The dish couldn't be fetched from the server.")
    }

    // Gets dish from the Dinner model using the saved currentDishId
    // from the General Appplication controller
    var dish = model.getDish(appController.currentDishId, onSuccessCallback, onErrorCallback);
  };

  // Update method, triggers render only when number of guests are updated
  var update = function(result) {
    if (result.guests) render();
  }

  // Registers the update method to be executed on notifyObservers
  model.addObserver(update);
}
