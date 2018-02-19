/** DinnerPrintItemView Object constructor
 *
 * @param {jQuery object} container - references .dish-print-recipes
 * @param {Object} dish - the reference to a Dish Object
 */
var DinnerPrintItemView = function (container, dish) {
  // Create the view for a dinner print item
  var $dishprint = $(`
    <div class='dish-print-wrapper'>
      <img class='dish-image' src='./images/${dish.image}'/>
      <div class='dish-print-details'>
        <h2>${dish.name}</h2>
        <p>${dish.description}</p>
      </div>
      <div>
        <h3>Preparation</h3>
        <p>${dish.description}</p>
      </div>
    </div>
  `);

  // Appends the above created element to the container .dish-print-recipes
  container.append($dishprint);
}

