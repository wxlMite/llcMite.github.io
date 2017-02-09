var app=angular.module('myapp',['ngRoute','ngAnimate','ngResource']);

app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{templateUrl:'template/index.html'})
                .when('/write',{template:'心情随写'})
                .when('/work',{template:'工作经历'})
                .when('/project',{template:'我的项目'})
                .when('/example',{template:'js实例'})
                .when('/skill',{template:'我的技能'})
                .when('/record',{template:'学习笔录'})
                .otherwise({redirectTo:'/'});
            }]);

