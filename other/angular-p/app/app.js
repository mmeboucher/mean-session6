	var portfolioApp = angular.module("portfolioSharingApp", ["ngRoute"]);

	portfolioApp.config(function ($routeProvider) {
		$routeProvider
			.when("/portfolios",  { controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html" })
		    .when("/portfolio/:portfolio_name",  { controller: "PortfolioViewerController", templateUrl: "app/partials/portfolio_viewer.html" })
		    .when("/",  { redirectTo: "partials/portfolios" })
        	.otherwise({ redirectTo: "/404_page" });
	});