angular.module('app')
  .controller('personInfoController',function($scope,$state,$http,$rootScope,$ionicLoading) {

    $scope.title = '个人基本信息';
    $scope.user={};
    $scope.cardtype={};
    $scope.peopleId={};
    $scope.politicsCode={};

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
        perAddress:response.perAddress,
        perIdCard:response.perIdCard,
        peopleId:response.peopleId,
        politicsCode:response.politicsCode,
        genderCode:response.genderCode,
        perEnglishName:response.perEnglishName,
        cardType:response.cardType,
        perPostalCode:response.perPostalCode,
        famPostcalCode:response.famPostcalCode,
        famTelephone:response.famTelephone,
        familyAddressDetail:response.familyAddressDetail,
        unitAddressDetail:response.unitAddressDetail
      };

      if(response.peopleList!==undefined&&response.peopleList!==null)
      {
          $scope.peopleList=response.peopleList;
          if(response.peopleId!==undefined&&response.peopleId!==null)
          {
            $scope.peopleList.map(function(people,i) {
              if(people.value==response.peopleId)
                $scope.user.people=$scope.peopleList[i];
            });
          }
      }

      if(response.politicsList!==undefined&&response.politicsList!==null)
      {
        $scope.politicsList=response.politicsList;
        if(response.politicsCode!==undefined&&response.politicsCode!==null)
        {
          $scope.politicsList.map(function(politics,i) {
            if(politics.value==response.politicsCode)
              $scope.user.politics=politics;
          });
        }
      }

      if(response.cardTypes!==undefined&&response.cardTypes!==null)
      {
        $scope.cardTypes=response.cardTypes;
        $scope.cardTypes.map(function(cardType,i) {
            if(cardType.label==response.cardType.label&&cardType.value==response.cardType.value)
              $scope.user.cardType=$scope.cardTypes[i];
        });
      }

      $scope.genderCodes=[{label:'男',value:'01'},{label:'女',value:'02'}];
      $scope.user.gender=$scope.genderCodes[0].value;


      $scope.info_1= [
        {id:"1",property:"姓名",val:$scope.user.perName,
          type:'span'},
        {id:"2",property:"英文姓名",val:'perEnglishName',
          type:'input'},
        {id:"3",property:"证件类型",model:'cardType',
          vals:$scope.cardTypes,
          type:'select',callback:'cardtype_func'},
        {id:"4",property:"证件号码",val:$scope.user.perIdCard,type:'span'},
        {id:"5",property:"学号",val:$scope.user.perNum,type:'span'},
        {id:"6",property:"性别",val:'gender',vals:$scope.genderCodes,
          type:'radio'},
        {id:"7",property:"民族",model:'people',
          vals: $scope.peopleList,type:'select'},
        {id:"8",property:"政治面貌",model:'politics',
          vals:$scope.politicsList
          ,type:'select'}
      ];

      $scope.maritalStatuses=[{label:'否',value:0},{label:'是',value:1}];
      if(response.maritalStatus!==undefined&&response.maritalStatus!==null)
      {
        $scope.user.maritalStatus=response.maritalStatus;
      }

      if(response.nationList!==undefined&&response.nationList!==null)
      {
        $scope.nationList=response.nationList;
        if(response.nation!==undefined&&response.nation!==null)
        {
            $scope.nationList.map(function(nation,i) {
              if(response.nation.label==nation.label)
                $scope.nation=nation;
            })
        }
      }

      //省列表
      if(response.pros!==undefined&&response.pros!==null)
          $scope.pros=response.pros;

      //籍贯
      if(response.region!==undefined&&response.region!==null)
      {
          $scope.pros.map(function(pro,i) {
            if(pro.label==response.region.province)
            {
              $scope.user.region={province:pro};
              if(response.region.city!==undefined&&response.region.city!==null)//add selected city for region
              {
                pro.sub.map(function(city,j) {
                    if(city.label==response.region.city)
                    {
                      $scope.user.region.city=city;
                      if(response.region.town!==undefined&&response.region.town!==null&&response.region.town!='')
                      {
                          city.sub.map(function(town,k) {
                              if(town.label==response.region.town)
                                $scope.user.region.town=town;
                          });
                      }
                    }
                });
              }
            }
          });
      }

      //家庭地址
      if(response.familyAddress!==undefined&&response.familyAddress!==null)
      {
        $scope.pros.map(function(pro,i) {
          if(pro.label==response.familyAddress.province)
          {
            $scope.user.familyAddress={province:pro};
            if(response.familyAddress.city!==undefined&&response.familyAddress.city!==null)//add selected city for region
            {
              pro.sub.map(function(city,j) {
                if(city.label==response.familyAddress.city)
                {
                  $scope.user.familyAddress.city=city;
                  if(response.familyAddress.town!==undefined&&response.familyAddress.town!==null&&response.familyAddress.town!='')
                  {
                    city.sub.map(function(town,k) {
                      if(town.label==response.familyAddress.town)
                        $scope.user.familyAddress.town=town;
                    });
                  }
                }
              });
            }
          }
        });
      }

      //工作地址
      if(response.unitAddress!==undefined&&response.unitAddress!==null)
      {
        $scope.pros.map(function(pro,i) {
          if(pro.label==response.unitAddress.province)
          {
            $scope.user.unitAddress={province:pro};
            if(response.unitAddress.city!==undefined&&response.unitAddress.city!==null)//add selected city for region
            {
              pro.sub.map(function(city,j) {
                if(city.label==response.unitAddress.city)
                {
                  $scope.user.unitAddress.city=city;
                  if(response.unitAddress.town!==undefined&&response.unitAddress.town!==null&&response.unitAddress.town!='')
                  {
                    city.sub.map(function(town,k) {
                      if(town.label==response.unitAddress.town)
                        $scope.user.unitAddress.town=town;
                    });
                  }
                }
              });
            }
          }
        });
      }


      $scope.info_2=[
        {id:"1",property:"婚否",val:'maritalStatus',vals:$scope.maritalStatuses,type:'radio'},
        {id:"2",property:"出生日期",val:"1990-10-15",type:'span'},
        {id:'3',property:'籍贯',arr:$scope.pros,store:'region',
          type:'selects'},
        {id:"4",property:"国别",model:$scope.nation,
          vals:$scope.nationList,
          type:'select'},
        {id:"5",property:"通讯地址",val:"perAddress",
          type:'input'},
        {id:"6",property:"邮编",val:'perPostalCode',
          type:'input'},
        {id:"7",property:"家庭地址",arr:$scope.pros,store:'familyAddress',
          type:'selects'},
        {id:"8",property:"家庭详细地址",val:'familyAddressDetail',
          type:'input'},
        {id:"9",property:"所在单位",arr:$scope.pros,store:'unitAddress',
          type:'selects'},
        {id:'10',property:'所在单位详细地址',val:'unitAddressDetail',
          type:'input'},
        {id:"10",property:"家庭邮编",val:'famPostcalCode',
          type:'input'},
        {id:"11",property:"家庭电话",val:'famTelephone',
          type:'input'}
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
      var regions=$scope.user.regions;
      console.log('...');
      console.log('...');
      console.log('...');
    };

    $scope.perEnglishName_change=function(){
      var eng_name=$scope.user.perEnglishName;
      console.log('...');
      console.log('...');
      console.log('...');
    }

    $scope.personinfo_submit=function() {
      var user = $scope.user;

      //$http.post('/proxy/node/baseInfoManage/yx_StuBaseInfoUpdateInitMobile.do',
      //  {
      //    personId: $scope.user.personId,
      //    perEnglishName:$scope.user.perEnglishName
      //  }).success(function(response){
      //
      //  });

      $http({
        method: "post",
        params: {
          personId: $scope.user.personId,
          perEnglishName:$scope.user.perEnglishName
        },
        url: "/proxy/node/tranningCloth/yx_StuBaseInfoUpdateMobile.do"
      }).success(function (response) {
        var re = response.re;
        if (re == 1) {
          console.log('success');
        }
      }).error(function (err) {
        if (err)
          alert(err.toString());
      });
    };

    $scope.go_back=function() {
    };

    $scope.radio_change=function(item){

    }

    $scope.type_change=function()
    {
      var info_1=$scope.info_1;
      console.log('...');
      console.log('...');
    }

    $scope.cardtype_func=function(){

    }


    $scope.go_back=function(){
      window.history.back();
    }

  });
