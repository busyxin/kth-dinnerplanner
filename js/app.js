$(function() {
  var model = new DinnerModel();

   $('.hamburger-wrapper').on('click', function() {
     $sidebarContainer.toggleClass('sidebar--show');
   });

   var AppController = {
     currentDishId: null,
     changeTo: changeTo
   };

  var introView         = new IntroView($('#intro')),
      sidebarView       = new SidebarView($('#sidebar'), model),
      dishSearchView    = new DishSearchView($('#dish-search'), model),
      dishDetailsView   = new DishDetailsView($('#dish-details'), model, AppController),
      dinnerSummaryView = new DinnerSummaryView($('#dinner-summary'), model),
      dinnerPrintView   = new DinnerPrintView($('#dinner-print'), model)

      introController         = new IntroController(introView, AppController),
      sidebarController       = new SidebarController(sidebarView, model, AppController),
      dishSearchController    = new DishSearchController(dishSearchView , model, AppController),
      dishDetailsController   = new DishDetailsController(dishDetailsView, model, AppController),
      dinnerSummaryController = new DinnerSummaryController(dinnerSummaryView, model, AppController),
      dinnerPrintController   = new DinnerPrintController(dinnerPrintView, AppController);

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
        dishDetailsView.show(AppController.currentDishId);
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