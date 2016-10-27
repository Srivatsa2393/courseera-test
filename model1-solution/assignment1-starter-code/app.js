(function () {

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.namesOfLunch = "";
      $scope.message = "";
      $scope.colorProp = "";

      $scope.displayMessage = function (){
        var value = countNoOfLunch($scope.namesOfLunch);
        if(!value){
          $scope.message = "Please enter data first";
          $scope.colorProp = {'color': 'red', 'border':'1px solid red'};
        }

        else{
          if (value && value <= 3){
          $scope.message = "Enjoy!";
          }

          else if (value > 3){
              $scope.message = "Too much!";
          }
            $scope.colorProp = {'color': 'green', 'border':'1px solid green'};
        }
      };
      var countNoOfLunch = function(str){
        if(str.length === 0)
        return 0;
        var totalNoOfLunch = str.split(',');
        return totalNoOfLunch.length;
      };
    }







})();
