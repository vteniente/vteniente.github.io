angular.module('Cvitae', [])
  .controller('CvitaeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.cvitae = {};
    
    $http.get('vteniente.json')
      .success(function (data) {
        $scope.cvitae = data;
      });
  }]);