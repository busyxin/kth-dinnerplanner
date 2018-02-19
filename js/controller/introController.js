/** IntroController Object constructor
 *
 * @param {Object} view - references the introView
 * @param {Object} appController - the reference to the General Application Controller
 */
var IntroController = function (view, appController) {
  // Adds a click event listener to the .back-edit button to transition to the DishSearchView
  view.createButton.on('click', function() {
    appController.changeTo('dishSearch');
  });
}