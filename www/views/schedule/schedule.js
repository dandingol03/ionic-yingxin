angular.module('app')
  .controller('scheduleController',function($scope,$state,$http,$rootScope){

    $scope.title='来校行程';
    $http({
      method: "post",
      params: {
        personId:$rootScope.user.personId
      },
      url: "/proxy/node/baseInfoManage/yxtrafficPlanShowInitMobile.do"
    }).success(function (response) {
      var re = response.re;
      if (re == 1) {
        $scope.user= {
          trafficType:response.trafficType,
          trafficNum:response.trafficNum,
          arriveTime:response.arriveTime,
          destination:response.destination,
          perNum:response.perNum,
          perName:response.perName,
          maleCount:response.maleCount,
          femaleCount:response.femaleCount,
          isHotel:response.isHotel
        };
        $scope.info= [
          {id:"1",property:"学号",val:$scope.user.perNum,type:'span'},
          {id:"2",property:"姓名",val:$scope.user.perName,type:'span'},
          {id:"3",property:"出行方式",val:$scope.user.trafficType,vals:['火车','汽车','飞机','自驾车','其他'],type:'select'},
          {id:"4",property:"火车车次/飞机班次",val:$scope.user.trafficNum,type:'input'},
          {id:"5",property:"到站地点",val:$scope.user.destination,vals:['青岛火车站','青岛火车北站','青岛流亭机场'],type:'select'},
          {id:"7",property:"随行人数",val:'1',type:'input'},
          {id:"8",property:'随行人员是否已自行安排住宿',val:$scope.user.isHotel,vals:['是','否'],type:'radio'}
        ];

      }

    }).error(function (err) {
      $ionicLoading.show({
        template: 'connect the server timeout',
        duration: '2000'
      });
    })




    $scope.go_back=function(){
      window.history.back();
    }

  });
