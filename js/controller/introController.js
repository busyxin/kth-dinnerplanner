/** DishSearchView Object constructor
 *
 * @param {Object} view - references the introView
 * @param {Object} appController - the reference to the General Application Controller
 */
var IntroController = function (view, appController) {
  view.createButton.on('click', function() {
    appController.changeTo('dishSearch');
  });
}