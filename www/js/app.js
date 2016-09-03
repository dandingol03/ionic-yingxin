angular.module('app',['ionic','ui.router','ngCordova', 'ionic-datepicker','highcharts-ng'])


  .run(function($ionicPlatform,$location,$rootScope,$ionicHistory,$ionicPopup) {

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
      //双击退出
      $ionicPlatform.registerBackButtonAction(function (e) {
        function showConfirm() {
          var confirmPopup = $ionicPopup.confirm({
            title: '<strong>退出应用?</strong>',
            template: '你确定要退出应用吗?',
            okText: '退出',
            cancelText: '取消'
          });

          confirmPopup.then(function (res) {
            if (res) {
              ionic.Platform.exitApp();
            } else {
              // Don't close
            }
          });
        }
        //判断处于哪个页面时双击退出
        if ($location.path() == '/home' ) {
          showConfirm();
        } else if ($ionicHistory.backView() ) {
          $ionicHistory.goBack();
        } else {
          // This is the last page: Show confirmation popup
          showConfirm();
        }
        e.preventDefault();
        return false;
      }, 101);

    });



    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    });

  })

  .config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      setLabel: 'Set',
      todayLabel: 'Today',
      closeLabel: 'Close',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      templateType: 'popup',
      from: new Date(1900, 8, 1),
      to: new Date(2060, 8, 1),
      showTodayButton: true,
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      disableWeekdays: [6]
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
  })

  .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');



    $stateProvider.state('tabs',{
      url:'/tabs',
      abstract:true,
      templateUrl:'views/tabs/tabs.html'
    });

    $stateProvider.state('tabs.dashboard',{
      url:'/dashboard',
      views:{
        'dashboard-tab':{
          controller:'dashboardController',
          templateUrl:'views/dashboard/dashboard.html'
        }
      }
    });

    $stateProvider.state('personInfo',{
      url:'/personInfo',
      controller: 'personInfoController',
      templateUrl:'views/personInfo/personInfo.html'

    });

    $stateProvider.state('costume',{
      url:'/costume',
      controller: 'costumeController',
      templateUrl:'views/costume/costume.html'

    });

    $stateProvider.state('schedule',{
      url:'/schedule',
      controller: 'scheduleController',
      templateUrl:'views/schedule/schedule.html'

    });

    $stateProvider.state('statistics',{
      url:'/statistics',
      controller: 'statisticsController',
      templateUrl:'views/statistics/statistics.html'

    });


    $stateProvider.state('college_statistics',{
      url:'/college_statistics/:collegeName',
      controller: 'collegeStatisticsController',
      templateUrl:'views/college_statistics/college_statistics.html'
    });



    $stateProvider.state('foreignStu_statistics',{
      url:'/foreignStu_statistics',
      controller: 'foreignStu_statisticsController',
      templateUrl:'views/foreignStu_statistics/foreignStu_statistics.html'
    });

    $urlRouterProvider.otherwise('statistics');

  })


  .factory('Insurances', function () {
    return [
      { company: 'AUD', date: '2015-02-03', detail: 'it is not a big deal' },
      { company: 'BRL', date: '2015-01-01', detail: 'it is not a big deal' },
      { company: 'CAD', date: '2015-03-01', detail: 'it is not a big deal' },
      { company: 'CNY', date: '2015-07-01', detail: 'it is a big deal'}
    ];
  })


  .controller('LeftMenuController',function($scope){

  })
