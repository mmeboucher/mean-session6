var portfolioApp = angular.module("portfolioSharingApp", ["ngRoute"]);

portfolioApp.config(function ($routeProvider) {
    $routeProvider
        .when("/portfolios",  { controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html" })
        .when("/",  { controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html"  })
//        .otherwise({ redirectTo: "/404_page" });


        .otherwise({ controller: "PortfolioListController", templateUrl: "app/partials/404.html" });


});