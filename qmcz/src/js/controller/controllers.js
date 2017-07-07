/**
 * Created by Administrator on 2017/6/8.
 */
angular.module("myApp.controller",[])
    .config(function ($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        var param = function(obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };
        $httpProvider.defaults.transformRequest = [
            function(data) {
                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }
        ];
    })
    .controller("HomeController",function ($scope,$http) {
        $scope.HomeData={
            slides:[],
            hot:[],
            new:[],
            unit:[]
        };
        var HotNav=['微电影','电影','电视剧','传统戏曲','话剧','书画','相声','戏剧','音乐剧','纪录片'];
       $http({
           url:'http://localhost:3000/IndexInfo',
           method:'get'
       }).then(function(res){
           console.log(res.data.result);
           $scope.HomeData.slides=res.data.result.slides;
           $scope.HomeData.hot=res.data.result.hot;
           $scope.HomeData.new=res.data.result.new;
           $scope.HomeData.unit=res.data.result.unit;
           $scope.HotNav=HotNav;
       },function(err){
           console.log(err);
       })
    })
    //登录
    .controller("LoginController",function ($scope) {

    })
    //注册
    .controller("RegisterController",function ($scope,$http) {
        $scope.reg=function (b) {
            if (b){
                $http({
                    url:"http://localhost:3000/user/reg",
                    method:"post",
                    data:{
                        name:$scope.username,
                        phone:$scope.phone,
                        password:$scope.pwd1,
                        passwordRepeat:$scope.pwd2
                    }
                }).then(function (res) {
                    console.log(res);
                },function (err) {
                    console.log(err);
                })
            }else {
                alert("error!!");
            }
        }
    })