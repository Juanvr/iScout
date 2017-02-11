(function () {
'use strict';

angular.module('iScout', [])

.controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope', '$http'];

function RegisterController($scope, $http){
  $scope.sent = false;

  $scope.something = function() {
    if($scope.user.name && $scope.user.lastname1 && $scope.user.birthdate && $scope.user.rol && $scope.user.email){
      $scope.sent = true;
    };
  };

};

})();
