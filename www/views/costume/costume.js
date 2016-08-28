/**
 * Created by danding on 16/8/28.
 */
angular.module('app')
  .controller('costumeController',function($scope,$state,$http){

    $scope.title='军训服装';
    $scope.costumeType = "2号三型";
    $scope.Ttype = "S";

    $scope.ad=new Object();

    $scope.dressSelect=function (item) {

      var costumeType = document.getElementById("tops");
      var Ttype = document.getElementById("weight");
      var index = costumeType.selectedIndex;
      var index_t = Ttype.selectedIndex;
      var val = costumeType.options[index].value;
      if (val == 9) {
        Ttype.disabled == true;
      }
      var val_t = Ttype.options[index_t].value;
      var sum = val + val_t;
      switch (sum) {
        case "10":
          $scope.costumeType = "2号三型";
          $scope.Ttype = "S";
          break;
        case "11":
          $scope.costumeType = "2号五型";
          $scope.Ttype = "M";
          break;
        case "20":
          $scope.costumeType = "3号三型";
          $scope.Ttype = "L";
          break;
        case "21":
          $scope.costumeType = "3号五型";
          $scope.Ttype = "XL";
          break;
        case "30":
          $scope.costumeType = "4号三型";
          $scope.Ttype = "XXL";
          break;
        case "31":
          $scope.costumeType = "4号五型";
          $scope.Ttype = "XXXL";
          break;
        case "40":
          $scope.costumeType = "5号三型";
          $scope.Ttype = "XXXXL";
          break;
        case "41":
          $scope.costumeType = "5号五型";
          $scope.Ttype = "XXXXXL";
          break;
        case "5":
          $scope.costumeType = "6号六型";
          $scope.Ttype = "特体加肥加大";
          break;
        default :
          break;
      }

    }






    $scope.go_back=function(){
      window.history.back();
    }


  });
