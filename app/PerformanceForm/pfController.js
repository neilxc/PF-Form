myApp.controller('pfController',
    function pfController($scope,pfService){
        $scope.employee = pfService.employee;
    });
