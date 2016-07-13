// script.js

    // create the module and name it myApp
        
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            //home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // register page
            .when('/register', {
                templateUrl : 'Register.html',
                controller  : 'registerController'
            })
            
            //next page
            .when('/next', {
    	       templateUrl : 'next.html',
    	       controller : 'next'
            })
           
          // login page page
            .when('/login', {
                templateUrl : 'Login.html',
                controller  : 'loginController'
            });
               
    });

 // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Welcome User !!!';
        
    });

    myApp.controller('registerController', function($scope) {
        $scope.message = 'New user can Register .';
    });

    myApp.controller('loginController', function($scope) {
        $scope.message = 'Login with your Credentials';
    });
    
    myApp.controller('loginController', function($scope, $location) {
    	
    
    	$scope.login = function() {
 
    	  console.log("this is in function");
    	  
    	  if ($scope.username === 'Ashwini' && $scope.password === 'Khandve') {
    	   
    		  var user=$scope.username;
    		  var pass=$scope.password;
    		    
    		  alert("welcome * " +user+" "+pass);
    		   
    	      event.preventDefault();
    	     
    	     
    	      location.reload();
    	      
    	      window.location.replace("next.html");
    	      
    	      console.log("login sucessful");
    	     
    	      $location.url("/next");

    	      self.closed();

    	  } 
    	  else {
    		  console.log("in else");
    		  alert("Invalid username and password!");
    	      $scope.showError = false;
    	      $scope.doFade = false;

    	      $scope.showError = true;

    	      $scope.errorMessage = 'Invalid username and password!';
    	  }
    	 };
    });
