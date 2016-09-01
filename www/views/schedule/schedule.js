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
          isHotel:response.isHotel,
        };

        if(response.trafficTypes!==undefined&&response.trafficTypes!==null)
        {
          $scope.trafficTypes=response.trafficTypes;
          if(response.trafficType!==undefined&&response.trafficType!==null)
          {
            $scope.trafficTypes.map(function(trafficType){
              if(trafficType.label==response.trafficType.label)
                $scope.trafficType=trafficType;
            });
          }

        }
        if(response.destinations!==undefined&&response.destinations!==null)
        {
          $scope.destinations=response.destinations;
          if(response.destination!==undefined&&response.destination!==null)
          {
            $scope.destinations.map(function(destination){
              if(destination.label==response.destination.label)
              $scope.destination=destination;
            });
          }
        }
        $scope.ok=[{label:'是',value:1},{label:'否',value:2}];
        if(response.isHotel!==undefined&&response.isHotel!==null)
        {
          $scope.ok.map(function (chose) {
            if(chose.label==response.isHotel.label)
            $scope.user.isHotel=chose.value;
          })
        }
        $scope.info= [
          {id:"1",property:"学号",val:$scope.user.perNum,type:'span'},
          {id:"2",property:"姓名",val:$scope.user.perName,type:'span'},
          {id:"3",property:"出行方式",model:$scope.trafficType,
            vals:$scope.trafficTypes,
            type:'select'},
          {id:"4",property:"火车车次/飞机班次",val:$scope.user.trafficNum,type:'input'},
          {id:"5",property:"到站地点",model:$scope.destination,
            vals:$scope.destinations,
            type:'select'},
          {id:"7",property:"随行人数(男)",val:$scope.user.femaleCount,type:'input'},
          {id:"8",property:"随行人数(女)",val:$scope.user.maleCount,type:'input'},
          {id:"9",property:'随行人员是否已自行安排住宿',val:'isHotel',vals:$scope.ok,type:'radio'}
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
