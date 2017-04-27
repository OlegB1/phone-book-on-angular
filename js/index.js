var app = angular.module('app', []);

var persons = [
    {
      "name": "Oliver",
      "surname": "Kahn",
      "phone": "240-094-35"
    },
    {
      "name": "Chicharito",
      "surname":"Ernandes",
      "phone": "860-187-49"
    },
    {
      "name": "Steven",
      "surname":"Gerrard",
      "phone": "461-597-11"
    },
    {
      "name": "Frank",
      "surname":"Lampard",
      "phone": "298-488-74"
    },
    {
      "name": "Zlatan",
      "surname":"Ibragimovich",
      "phone": "974-797-45"
    }
  ];

app.controller('customersCtrl', function($scope, $http) {

    $scope.persons = persons;

    $scope.orderBy = function(x) {
       $scope.order = x;
    };

    $scope.addPerson = function () {
        if (!$scope.firstName || !$scope.secondName || !$scope.phoneNumber) {
            return;
        }

        $scope.isSamePerson = $scope.persons.some(isSamePerson);
        if ($scope.isSamePerson) {
            return;
        }
        
        $scope.persons[$scope.persons.length] = {
            name:$scope.firstName,
            surname : $scope.secondName,
            phone : $scope.phoneNumber
        };

        $scope.firstName = '';
        $scope.secondName = '';
        $scope.phoneNumber = '';
    };

    function isSamePerson(person) {
        return person.name.toLowerCase() === $scope.firstName.toLowerCase() &&
            person.surname.toLowerCase() === $scope.secondName.toLowerCase();
    }
});