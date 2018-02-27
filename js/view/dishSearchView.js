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
  this.render = function(dishType, dishFilter) {
    // Finds the .dish-display container
    var $dishDisplay = container.find('.dish-display');
    var type = dishType ? dishType : this.searchType.val();
    var filter = dishFilter ? dishFilter : this.searchFilter.val();

    // Add loader here
    $dishDisplay.html('LOADING...');

    var onSuccessCallback = function(data) {
      // Flushes old content from .dish-display
      $dishDisplay.html('');
      if (data.results && data.results.length !== 0) {
        var dishes = data.results;

        dishes.map(function(dish) {
          var dishItem = new DishItemView($dishDisplay, model, dish);
        });
      } else {
        $dishDisplay.text('No dish found, try other filters.')            
      }
    }
  
    var onErrorCallback = function(error) {
      window.alert(error);
    }

    var dishes = model.getAllDishes(type, filter, onSuccessCallback, onErrorCallback);
  }

  this.onSuccessCallback = function(dishes) {
    dishes.map(function(dish) {
      var dishItem = new DishItemView($dishDisplay, model, dish);
    });
  }

  this.onErrorCallback = function() {
    $dishDisplay.text('No dish found, try other filters.')    
  }

  this.render();
}

