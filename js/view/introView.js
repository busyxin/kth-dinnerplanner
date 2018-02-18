/** WelcomeView Object constructor
 *
 * @param {jQuery object} container - references the #intro container
 */
var IntroView = function (container) {
	this.createButton = container.find("#start-btn");

	this.hide = function() {
		container.addClass('intro--removed');
	};
}

