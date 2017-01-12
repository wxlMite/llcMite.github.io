var app=angular.module('myapp',['ngRoute','ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{template:'这是首页页面'})
                .when('/company',{template:'这是电脑分类'})
                .when('/classes',{template:'前端课程'})
                .when('/help',{template:'帮帮我'})
                .otherwise({redirectTo:'/'});
            }]);