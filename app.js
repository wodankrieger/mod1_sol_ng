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
        };

        function wordCount(string) {
            return string.split(',').length;
        }
    }
})();
