/**
 * Created by yiming on 16/9/2.
 */
angular.module('app')
    .controller('collegeStatisticsController',function($scope,$state,$http,$ionicLoading,$stateParams) {


        $scope.go_back = function () {
            window.history.back();
        };
        $scope.collegeName = $stateParams.collegeName;

        $http({
            method: "post",
            params:
            {
                collegeName:$scope.collegeName
            },
            url: "http://202.194.14.181/baseInfoManage/yxstatsticsCollegeDetailInfoMobile.do"
        }).success(function (response) {

            var arrivals=response.arrivals;

            $scope.chartConfig = {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: $scope.collegeName
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' :
                        'Pinch the chart to zoom in'
                },
                xAxis: {
                    type: 'datetime',
                    minRange: 10 // fourteen days
                },
                yAxis: {
                    title: {
                        text: 'population'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'area',
                    name: 'USD to EUR',
                    pointInterval: 1000 * 60*60,
                    pointStart: Date.UTC(2016, 8, 2,8),
                    data: arrivals
                }]
            };

        }).error(function (err) {

        });
    })
