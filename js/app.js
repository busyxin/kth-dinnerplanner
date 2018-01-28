$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// Populate menu with some dishes
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);

	var dishSearchView = new DishSearchView($("#dish-search"), model);
	var sidebarView = new SidebarView($("#sidebar"), model);
	var dishdetailsView = new DishDetailsView($("#dish-details"), model.getSelectedDish('starter'));
	var dinnerSummaryView = new DinnerSummaryView($("#dinner-summary"), model);
	var dinnerPrintView = new DinnerPrintView($("#dinner-print"), model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

	 	//Code to be moved to a controller
		// welcomeView.createButton.on('click', function() {
		// 	$('.welcome').addClass('welcome--removed');
		// });
		//Code to be moved to a controller
		$('.hamburger-wrapper').on('click', function() {
			$('.sidebar').toggleClass('sidebar--show');
		});
});