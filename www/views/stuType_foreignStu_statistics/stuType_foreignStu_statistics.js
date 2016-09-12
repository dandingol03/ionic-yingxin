/**
 * Created by yiming on 16/9/2.
 */
angular.module('app')
  .controller('stuType_foreignStu_statisticsController',function($scope,$state,$http,$ionicLoading,$stateParams) {


    $scope.go_back = function () {
      window.history.back();
    };
    $scope.stuTypeCode = $stateParams.stuTypeCode;
    $scope.stuType=$stateParams.stuType;


    $http({
      method: "post",
      params: {stuTypeCode:$scope.stuTypeCode},
      url: "/proxy/node/foreignrecruit/ionic_statisticsRegistersByStuType.do"
    }).success(function (response) {

      var arrivals=response.arrivals;
      var stuType=response.stuType;

      $scope.chartConfig = {
        chart: {
          type: 'spline'
        },
        title: {
          text: $scope.stuType+' 报到人数时域图'
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
          },
          title: {
            text: 'Date'
          }
        },
        yAxis: {
          title: {
            text: 'Snow depth (m)'
          },
          min: 0
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },
        plotOptions: {
          spline: {
            marker: {
              enabled: true
            }
          }
        },
        series: [{
          name: $scope.stuType,
          data: arrivals
        }]
      };

    }).error(function (err) {

    });
  })
