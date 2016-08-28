angular.module('app')
  .controller('personInfoController',function($scope,$state,$http){

    $scope.title='个人基本信息';

    $scope.info_1= [
      {id:"1",property:"姓名",val:"枭",type:'span'},
      {id:"2",property:"英文姓名",val:"micheal jorden",type:'input'},
      {id:"3",property:"证件类型",val:'身份证',vals:['请选择','身份证','银行卡'],type:'select'},
      {id:"4",property:"证件号码",val:"460104199910150019",type:'span'},
      {id:"5",property:"学号",val:"201513655",type:'span'},
      {id:"6",property:"性别",val:'男',vals:['男','女'],type:'radio'},
      {id:"7",property:"民族",val:'汉族',vals:['请选择','汉族','蒙古族'],type:'select'},
      {id:"8",property:"政治面貌",val:'中国共产党预备党员',vals:['请选择','中国共产党预备党员','中国共产党党员','群众'],type:'select'}
    ];

    $scope.go_back=function() {
    }

    $scope.info_2=[
      {id:"1",property:"婚否",val:"否",vals:['是','否'],type:'radio'},
      {id:"2",property:"出生日期",val:"1990-10-15",type:'span'},
      {id:"3",property:"籍贯",val:'海南省',type:'span'},
      {id:"4",property:"国别",val:'中国',vals:['请选择','阿富汉','意大利','中国'],type:'select'},
      {id:"5",property:"通讯地址",val:"交通局路政管理站",type:'input'},
      {id:"6",property:"邮编",val:'111111',type:'input'}
    ];

    $scope.go_back=function(){
      window.history.back();
    }

  });
