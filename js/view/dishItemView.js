/** DishItemView Object constructor
 *
 * @param {jQuery object} container - references the .dish-display container
 * @param {Object} model - the reference to the Dinner Model
 * @param {Object} dish - the reference to a dish Object
 * @param {Boolean} withPrice - when true, display price
 */
var DishItemView = function (container, model, dish, withPrice) {
  // Create the view for a dish item
  var newDishItem = $(`
    <div class='dish-wrapper' data-dishid='${dish.id}'>
      <img class='dish-image' src='https://spoonacular.com/recipeImages/${dish.image}'/>
      <div class='dish-name'>${dish.title}</div>
    </div>
  `);

  // When withPrice boolean is set to true, append the dish price to the dish item
  if (withPrice) {
    newDishItem.append($(`
      <div class='dish-price'>
        ${model.getDishPrice(dish)}
      </div>
    `));
  }

  // Append created dish item to the .dish-display container
  container.append(newDishItem);
}
