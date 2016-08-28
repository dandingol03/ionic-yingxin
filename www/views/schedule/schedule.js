angular.module('app')
  .controller('scheduleController',function($scope,$state,$http){

    $scope.title='来校行程';

    $scope.info= [
      {id:"1",property:"学号",val:"1142051104",type:'span'},
      {id:"2",property:"姓名",val:"micheal jorden",type:'span'},
      {id:"3",property:"出行方式",val:'身份证',vals:['火车','汽车','飞机','自驾车','其他'],type:'select'},
      {id:"4",property:"火车车次/飞机班次",val:"12",type:'input'},
      {id:"5",property:"到站地点",val:'男',vals:['青岛火车站','青岛火车北站','青岛流亭机场'],type:'select'},
      {id:"7",property:"随行人数",val:'1',type:'input'},
      {id:"8",property:'随行人员是否已自行安排住宿',val:'中国共产党预备党员',vals:['是','否'],type:'radio'}
    ];


    $scope.go_back=function(){
      window.history.back();
    }

  });
