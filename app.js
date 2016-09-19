(function () {
   'use strict';
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.checkButton = function () {
            var totalNameValue = wordCount($scope.name);
            $scope.totalValue = totalNameValue;

                if ($scope.totalValue == 0) {
                    $scope.message = "Please enter data first";
                } else if ($scope.totalValue <= 3) {
                    $scope.message = "Enjoy!";
                } else $scope.message = "Too much!";

        };


        function wordCount(string) {
            string.trim();
            if (string === "") return 0;
            return string.split(',').length;
        }


    }
})();
