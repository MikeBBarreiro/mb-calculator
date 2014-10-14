(function(){
  'use strict';

  angular.module('mb-calculator')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.number = function(num){
      var dis = $scope.display;
      num += '';

      if(dis === '0'){
        dis = num;
      }else{
        dis += num;
      }

      $scope.display = dis;
    };

    $scope.decimal = function(){
      if($scope.display.indexOf('.') === -1){
        $scope.display += '.';
      }
    };

    $scope.clear = function(){
      $scope.display = '0';
    };

    $scope.clear();
  }]);
})();
