angular.module('app')
  .controller('foreignStu_statisticsController',function($scope,$state,$http,$ionicLoading,$ionicModal){

    $scope.repaint=function(){
      //please wait....
      $ionicLoading.show({template:'正在拉取数据'});
      $http({
        method:"get",
        params:{
        },
        url:"/proxy/node/foreignrecruit/ionic_statisticsRegisters.do"
      }).success(function(response){
        $ionicLoading.hide();

        var stuTypes=response.stuTypes;
        var arrivals= response.arrival;
        var notArrivals=response.notArrival;
        $scope.stuTypes=stuTypes;
        $scope.stuTypeCodes=response.stuTypeCodes;



        $scope.chartConfig = {

          options: {

            chart: {
              type: 'bar'
            },
            tooltip: {
              valueSuffix: '人'
            }
          },
          //The below properties are watched separately for changes.
          credits: {
            enabled: false
          },
          //Series object (optional) - a list of series using normal Highcharts series options.
          series: [arrivals ,notArrivals],
          //Title configuration (optional)
          title: {
            text: '各学生类型已报到情况'
          },
          //Boolean to control showing loading status on chart (optional)
          //Could be a string if you want to show specific loading text.
          loading: false,
          //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
          //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
          xAxis: {
            // categories: ['计算机', '软件', '能动', '电气', '新闻'],
            categories: stuTypes,
            title: {
              text: '学生类型'
            }
          },

          yAxis: {
            min: 0,
            title: {
              text: '人数',
              align: 'high'
            },
            labels: {
              overflow: 'justify'
            }
          },

          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },

          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
          },

          //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
          useHighStocks: false,
          //size (optional) if left out the chart will default to size of the div or something sensible.
          size: {
            width: 440,
            height: 1200
          },
          //function (optional)
          func: function (chart) {
            //setup some logic for the chart
          }
        };

        /*** 特定学生类型按时间统计报道人数 ***/
        $ionicModal.fromTemplateUrl('views/modal/foreignStu_statistics_modal.html',{
          scope:  $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.statistics_modal = modal;
          $scope.statistics_modal.stuType=$scope.stuTypes[0];
        });

        $scope.openModal= function(){
          $scope.statistics_modal.show();
        };

        $scope.closeModal= function() {
          $scope.statistics_modal.hide();
        };

        /*** 特定学生类型按时间统计报道人数 ***/


      }).error(function(err) {

      });



    };

    $scope.repaint();



    $scope.go_back=function(){
      window.history.back();
    }

    $scope.update=function(){
      $scope.repaint();
    }

    $scope.change=function () {
      //var college=$scope.statistics_modal.college;
      console.log('...');
    }

    $scope.confirm=function () {
      $scope.closeModal();
      var stuTypeCode=null;
      $scope.stuTypes.map(function(type,i) {
        if(type==$scope.statistics_modal.stuType)
            stuTypeCode=$scope.stuTypeCodes[i];
      });
      $state.go('stuType_foreignStu_statistics',{stuTypeCode:stuTypeCode,stuType:$scope.statistics_modal.stuType});

    }



  });
