/** DishSearchView Object constructor
 *
 * @param {jQuery object} container - references the #dish-details container
 * @param {Object} model - the reference to the Dinner Model
 */
var DishSearchView = function (container, model) {
  // Expose the container #dish-details, the #search-type select,
  // the #search-filter textInput and the #search-submit button
  // for the DishSearchController to access
  this.container = container;
  this.searchType = container.find('#search-type')
  this.searchFilter = container.find('#search-filter')
  this.searchSubmit = container.find('#search-submit');

  // Method to show the DishSearchView using css via class appending
  this.show = function() {
    container.addClass('main--show');
  };

  // Method to hide the DishSearchView using css via class removal
  this.hide = function() {
    container.removeClass('main--show');
  };

  // Render method
  this.render = function(filteredDishes) {
    // Finds the .dish-display container
    var $dishDisplay = container.find('.dish-display');

    // Flushes old content from .dish-display
    $dishDisplay.html('');

    // If there are filteredDishes passed by the dishSearchController
    // display those, else all the dishes from the Dinner model should be displayed
    if (filteredDishes) {
      var dishes = filteredDishes;
    } else {
      var dishes = model.getEveryDish();
    }

    // When there are filteredDishes but the Array is empty (no match)
    if (!dishes.length) {
      $dishDisplay.text('No dish found, try other filters.')

    // When there are dishes to be displayed, create each dish item
    // by iterating through dishes
    } else {
      dishes.map(function(dish) {
        var dishItem = new DishItemView($dishDisplay, model, dish);
      });
    }
  }

  this.render();
}

