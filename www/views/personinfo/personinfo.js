angular.module('app')
  .controller('personInfoController',function($scope,$state,$http,$rootScope,$ionicLoading) {

    $scope.title = '个人基本信息';
    $scope.user={};
  $http({
    method: "post",
    params: {
      personId:$rootScope.user.personId
    },
    url: "/proxy/node/baseInfoManage/yxStuBaseInfoUpdateInitMobile.do"
  }).success(function (response) {
    var re = response.re;
    if (re == 1) {
      //TODO:enter the dashboard panel
      //$state.go('tabs.dashboard');
      $scope.user= {
        perName:response.perName,
        perNum:response.perNum,
        perIdCard:response.perIdCard,
        peopleId:response.peopleId,
        politicsCode:response.politicsCode,
        genderCode:response.genderCode,
        perEnglishName:response.perEnglishName,
        cardTypeCode:response.cardTypeCode
      };

      $scope.info_1= [
        {id:"1",property:"姓名",val:$scope.user.perName,type:'span'},
        {id:"2",property:"英文姓名",val:$scope.user.perEnglishName,type:'input'},
        {id:"3",property:"证件类型",val:$scope.user.cardTypeCode,vals:['请选择','身份证','银行卡'],type:'select'},
        {id:"4",property:"证件号码",val:$scope.user.perIdCard,type:'span'},
        {id:"5",property:"学号",val:$scope.user.perNum,type:'span'},
        {id:"6",property:"性别",val:$scope.user.genderCode,vals:['男','女'],type:'radio'},
        {id:"7",property:"民族",val:$scope.user.peopleId,vals:['请选择','汉族','蒙古族'],type:'select'},
        {id:"8",property:"政治面貌",val:$scope.user.politicsCode,vals:['请选择','中国共产党预备党员','中国共产党党员','群众'],type:'select'}
      ];
    } else {
    }

  }).error(function (err) {
    alert(err.toString());
    $ionicLoading.show({
      template: 'connect the server timeout',
      duration: '2000'
    });
  })




    //{id:'3',property:'',val:'',arr:[],type:'selects'},及联数组列

    $scope.addresses=[
      {
        province:'北京市',sub:[
        {city:'东城区'},
        {city:'西城区'},
        {city:'朝阳区'},
        {city:'宣武区'},
        {city:'丰台区'}
      ]},
      {
        province:'山东省',sub:[
        {city:'济南市'},
        {city:'青岛市'},
        {city:'东营市'},
        {city:'日照市'},
        {city:'德州市'}
      ]},
      {
        province:'河北省',sub:[
        {city:'石家庄市',sub:[
          {county:'长安区'},{county:'桥东区'},{county:'桥西区'},{county:'新华区'}
        ]}
      ]}
    ];



    $scope.address_length=2;

    $scope.address={};

    $scope.address_change=function(item){
      var address=$scope.ob;
      console.log('...');
      console.log('...');
      console.log('...');
    };

    $scope.go_back=function() {
    };


    $scope.info_2=[
      {id:"1",property:"婚否",val:"否",vals:['是','否'],type:'radio'},
      {id:"2",property:"出生日期",val:"1990-10-15",type:'span'},
      {id:'3',property:'籍贯',arr:$scope.addresses,type:'selects',store:'regions'},
      {id:"4",property:"国别",val:'中国',vals:['请选择','阿富汉','意大利','中国'],type:'select'},
      {id:"5",property:"通讯地址",val:"交通局路政管理站",type:'input'},
      {id:"6",property:"邮编",val:'111111',type:'input'},
      {id:"7",property:"家庭地址",arr:$scope.addresses,type:'selects',store:'familyAddress'},
      {id:"8",property:"所在单位",arr:$scope.addresses,type:'selects',store:'unitAddress'},
      {id:"9",property:"家庭邮编",val:'111111',type:'input'},
      {id:"10",property:"家庭电话",val:'111111',type:'input'}
    ];

    $scope.go_back=function(){
      window.history.back();
    }

  });
