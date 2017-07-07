/**
 * Created by Administrator on 2017/6/8.
 */
angular.module("myApp",["ui.router","myApp.controller"])
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("home",{
                url:"/home",
                templateUrl:"views/home.html",
                controller:"HomeController"
            })
            .state("login",{
                url:"/login",
                templateUrl:"views/login.html",
                controller:"LoginController"

            })
            .state("register",{
                url:"/register",
                templateUrl:"views/register.html",
                controller:"RegisterController"
            })
    })