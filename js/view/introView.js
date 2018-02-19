/** IntroView Object constructor
 *
 * @param {jQuery object} container - references the #intro container
 */
var IntroView = function (container) {
  // Exposes the #start-btn button for the IntroController to access
  this.createButton = container.find("#start-btn");

  // Method to hide the IntroView using css via class removal
  this.hide = function() {
    container.addClass('intro--removed');
  };
}

