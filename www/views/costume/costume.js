/**
 * Created by danding on 16/8/28.
 */
angular.module('app')
  .controller('costumeController',function($scope,$state,$http,$rootScope,$ionicLoading){

    $scope.title='军训服装';
    $scope.costumeType = null;
    $scope.Ttype = null;
    $scope.shoes=null;
    $scope.user={};

    $scope.ad=new Object();
    $http({
      method: "post",
      params: {
        personId:$rootScope.user.personId
      },
      url: "/proxy/node/tranningCloth/studentTrainingClothWithPhone.do"
    }).success(function (response) {
      var re = response.re;
      if (re == 1) {
        $scope.user= {
          clothSize:response.clothSize,
          shoeSize:response.shoeSize
        }
        $scope.shoes=$scope.user.shoeSize;
        $scope.cloth=$scope.user.clothSize;
        $scope.clothAndShoe();
      }

    }).error(function (err) {
      $ionicLoading.show({
        template: 'connect the server timeout',
        duration: '2000'
      });
    })

    $scope.upload = function() {
      $http({
        method: "post",
        url: "/proxy/node/tranningCloth/studentTrainingClothWithPhone.do"
      }).success(function (response) {


      }).error(function (err) {
        $ionicLoading.show({
          template: 'connect the server timeout',
          duration: '2000'
        });
      })
    }
    $scope.shoeSelect=function() {
      $scope.shoes=$scope.ad.shoes
    }
    $scope.clothAndShoe=function(){
      switch ($scope.cloth){
        case "1":
          $scope.costumeType = "2号三型";
          $scope.Ttype = "S";
          break;
        case "2":
          $scope.costumeType = "2号五型";
          $scope.Ttype = "M";
          break;
        case "3":
          $scope.costumeType = "3号三型";
          $scope.Ttype = "L";
          break;
        case "4":
          $scope.costumeType = "3号五型";
          $scope.Ttype = "XL";
          break;
        case "5":
          $scope.costumeType = "4号三型";
          $scope.Ttype = "XXL";
          break;
        case "6":
          $scope.costumeType = "4号五型";
          $scope.Ttype = "XXXL";
          break;
        case "7":
          $scope.costumeType = "5号三型";
          $scope.Ttype = "XXXXL";
          break;
        case "8":
          $scope.costumeType = "5号五型";
          $scope.Ttype = "XXXXXL";
          break;
        case "9":
          $scope.costumeType = "6号六型";
          $scope.Ttype = "特体加肥加大";
          break;
        default :
          break;

      }
      switch ($scope.shoes){
        case "1":
              $scope.shoes=22.5;
              break;
        case "2":
          $scope.shoes=23;
          break;
        case "3":
          $scope.shoes=23.5;
          break;
        case "4":
          $scope.shoes=24;
          break;
        case "5":
          $scope.shoes=24.5;
          break;
        case "6":
          $scope.shoes=25;
          break;
        case "7":
          $scope.shoes=25.5;
          break;
        case "8":
          $scope.shoes=26;
          break;
        case "9":
          $scope.shoes=26.5;
          break;
        case "10":
          $scope.shoes=27;
          break;
        case "11":
          $scope.shoes=27.5;
          break;
        case "12":
          $scope.shoes=28;
          break;
      }
    }
    $scope.dressSelect=function (item) {

      var sum = $scope.ad.tops+$scope.ad.weight;
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
        case "50":
          $scope.costumeType = "6号六型";
          $scope.Ttype = "特体加肥加大";
          break;
        case "51":
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
