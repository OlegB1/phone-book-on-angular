var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("contucts.json").then(function table (response) {
        var arr = response.data.members;
        $scope.myData = arr;
    });
    $scope.orderby=function(x){
       $scope.order = x;
    }
    $scope.addPerson = function () {
        if ($scope.Firstname && $scope.Secondname && $scope.Phonenumber){
            $scope.flag = false;
            for (var i = 0; i < $scope.myData.length; i++){
                if ($scope.myData[i].Name.toLowerCase()== $scope.Firstname.toLowerCase() && $scope.myData[i].Surname.toLowerCase() == $scope.Secondname.toLowerCase()){
                    $scope.flag = true
                }
            }
            if ($scope.flag==false){
                $scope.myData[$scope.myData.length]={
                    Name:$scope.Firstname,
                    Surname : $scope.Secondname,
                    Phone : $scope.Phonenumber
                }
                $scope.Firstname = '';
                $scope.Secondname = '';
                $scope.Phonenumber = '';
            }
        }
    }
});
