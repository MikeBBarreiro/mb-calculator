(function(){
  'use strict';

  angular.module('mb-calculator')
  .controller('MainCtrl', ['$scope', function($scope){

    $scope.answer = function(){
      var x = $scope.memory * 1,
          y = $scope.display * 1,
          ans = 0;

      switch($scope.operator){
        case '+':
          ans = x + y;
          break;
        case '-':
          ans = x - y;
          break;
        case '*':
          ans = x * y;
          break;
        case '/':
          ans = x / y;
      }
      $scope.display = ans;
      $scope.operator = $scope.memory = '';
    };

    $scope.calculate = function(op){
      $scope.operator = op;
      $scope.memory = $scope.display;
      $scope.clear();
    };

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
