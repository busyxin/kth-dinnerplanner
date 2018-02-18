$(function() {
  var model = new DinnerModel();

  model.numberOfGuests = 3;
  // Populate menu with some dishes
  model.addDishToMenu(1);
  model.addDishToMenu(100);
  model.addDishToMenu(200);

   $('.hamburger-wrapper').on('click', function() {
     $sidebarContainer.toggleClass('sidebar--show');
   });

  var introView         = new IntroView($('#intro')),
      sidebarView       = new SidebarView($('#sidebar'), model),
      dishSearchView    = new DishSearchView($('#dish-search'), model),
      dishDetailsView   = new DishDetailsView($('#dish-details'), model, null),
      dinnerSummaryView = new DinnerSummaryView($('#dinner-summary'), model),
      dinnerPrintView   = new DinnerPrintView($('#dinner-print'), model);

  var AppController = {
    currentDish: null,
    changeTo: changeTo
  };

  var introController         = new IntroController(introView, AppController);
  var sidebarController       = new SidebarController(sidebarView, model, AppController);
  var dishSearchController    = new DishSearchController(dishSearchView , model, AppController);
  var dishDetailsController   = new DishDetailsController(dishDetailsView, model, AppController);
  var dinnerSummaryController = new DinnerSummaryController(dinnerSummaryView, model, AppController);
  var dinnerPrintController   = new DinnerPrintController(dinnerPrintView, AppController);


  function changeTo(viewName) {
    clearView();

    switch(viewName) {
      case 'dishSearch':
        introView.hide();
        sidebarView.show();
        dishSearchView.show();
        break;

      case 'dishDetails':
        sidebarView.show();
        dishDetailsView.show();
        break;

      case 'dinnerSummary':
        dinnerSummaryView.show();
        break;

      case 'dinnerPrint':
        dinnerPrintView.show();
        break;

      default:
        break;
    }
  }

  var clearView = function clearView() {
    sidebarView.hide();
    dishSearchView.hide();
    dishDetailsView.hide();
    dinnerSummaryView.hide();
    dinnerPrintView.hide();
  }
});