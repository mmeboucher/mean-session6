# mean session 6 "done" files
This repos now works properly with the controller and partial in separate directories. Please note the following.

To run the portfolios page in your browser:
+ download the zip file from this page
+ cd into the angular directory (important!)
+ run: $python -m SimpleHTTPServer in the terminal
+ open a browser and navigate to http://localhost:8000
+ This should show the index.html (portfolios page) file

The routes (open app.js to view them properly formatted) have been set up as follows:

.when("/portfolios",  {controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html"})
.when("/",  {controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html" })
.otherwise({ redirectTo: "/404_page" });
}); 

This means that you can enter the following urls into your browser to view the portfolios page:
* http://localhost:8000/#/
* http://localhost:8000/#/portfolios

However when you enter anything else you get a redirect to a 404 page.

Try entering:
* http://localhost:8000/#/blah
The redirect kicks in and you get
* http://localhost:8000/#/404_page

Your homework is to create a pirate themed 404 partial html to replace this blank page. You should use the existing contoller to add some data to the page.

Start by editing the route in app.js:

.otherwise({ controller: "PortfolioListController", templateUrl: "app/partials/404.html"  });

Now try an invalid URL such as http://localhost:8000/#/blah - you should see your html partial. Now add some data to the PortfolioListController. For reference her is the data we used in class for the User log in:

$scope.user = { name: "Daniel" };

Add at least one item to the $scope of PortfolioListController to have them display on your 404 page. If you are really stuck look at the 404page branch in this repo.

There are a number of assets and design components (done in Bootstrap) available [here](http://daniel.deverell.com/css-files/other/pirate/pirate/).
