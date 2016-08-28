/**
 * Created by danding on 16/8/28.
 */
angular.module('app')
  .controller('costumeController',function($scope,$state,$http){

    $scope.title='个人基本信息';

    $scope.items= [
      {id:"1",property:"名称",num:"太平洋寿险"},
      {id:"2",property:"保额",num:"400$"},
      {id:"3",property:"保费",num:"500$"},
      {id:"4",property:"保险期间",num:"保至70周岁"},
      {id:"5",property:"缴费期间",num:"2周年"},
      {id:"6",property:"首年保费",num:"30000$"}
    ];

    $scope.go_back=function(){
      window.history.back();
    }

  });
