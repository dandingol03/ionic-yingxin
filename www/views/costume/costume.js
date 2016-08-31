/**
 * Created by danding on 16/8/28.
 */
angular.module('app')
  .controller('costumeController',function($scope,$state,$http,$ionicLoading){

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
      url: "/proxy/node/tranningCloth/student_training_cloth_mobile.do"
    }).success(function (response) {
      var re = response.re;
      if (re == 1) {
        $scope.user= {
          clothSize:response.clothSize,
          shoeSize:response.shoeSize
        }
        $scope.shoes=$scope.user.shoeSize;
        $scope.cloth=$scope.user.clothSize;
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
        url: "/proxy/node/tranningCloth/student_training_cloth_mobile.do"
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
