var app=angular.module('myapp',['ngRoute','ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{templateUrl:'template/boke_index.html'})
                .when('/company',{template:'这是电脑分类'})
                .when('/list',{template:'前端课程'})
                .when('/help',{template:'帮帮我'})
                .otherwise({redirectTo:'/'});
            }]);