/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('loginController',function($scope,$state,$ionicLoading,$http,$rootScope,$cordovaProgress){

    $scope.login = function(){
          $http({
              method:"post",
              params:{
                  loginName:$scope.user.username,
                  password:$scope.user.password
              },

              url:"/proxy/node/tranningCloth/mobileLogin.do"

          }).success(function(response){
            var re = response.re;
            if(re==1)
            {
              //TODO:enter the dashboard panel
              $state.go('tabs.dashboard');
              var personId=response.personId;
              $rootScope.user=
              {
                personId:personId
              };
            }else{}

          }).error(function(err){
              alert(err.toString());
              $ionicLoading.show({
                  template:'connect the server timeout',
                  duration:'2000'
              });
          })

      }




    $scope.user=new Object();
    $scope.get_preference=function(){
      $cordovaPreferences.fetch('name')
        .success(function(value) {
          alert("Success: " + value);
        })
        .error(function(error) {
          alert("Error: " + error);
        });
    };


    //$scope.login = function(){
    //  $http({
    //            method:"post",
    //            params:{
    //                grant_type: 'password',
    //                username:$scope.user.username,
    //                password:$scope.user.password
    //            },
    //            url:"/proxy/node/sduyingxinGetUserLoginJSONObjectMobile.do",
    //           headers: {
    //            'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
    //            'Content-Type': 'application/x-www-form-urlencoded'
    //           },
    //
    //        }).success(function(response){
    //            var re=response.re;
    //          if(re==1)
    //          {
    //            $state.go('tabs.coverage');
    //          }else{
    //
    //          }
    //        }).error(function(err){
    //            alert(err.toSource());
    //            $ionicLoading.show({
    //                template:'connect the server timeout',
    //                duration:'2000'
    //            });
    //        })
    //    }


    $scope.update_op='option1';
    $scope.update_options=function(){
      console.log('...');
      console.log('...');
      console.log('...');
    }


  })

