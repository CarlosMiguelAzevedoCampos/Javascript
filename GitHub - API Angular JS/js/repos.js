var app;
app = angular.module('reposPage', []);

//Returns information from the user repo.
app.controller('repoName', function ($location, $scope, $http) {
  var url = "https://api.github.com/repos/CarlosMiguelAzevedoCampos/";
  $http.get(url.concat($location.search().reponame))
    .then(function (response) {
      if (response.status == 200) {//Everything is ok whit the call? True, No?, false.
        $scope.name = response.data.name;
        response.data.description == null ? $scope.description = "Sorry, i don´t have description for this repo." : $scope.description = response.data.description;
        response.data.language == null ? $scope.language = "I can´t determinate whit language this is.." : $scope.language = response.data.language;
        $scope.created = response.data.created_at;
        $scope.updated = response.data.updated_at;
        $scope.status = true;
      }
      else {
        $scope.status = false;
      }
    });
});
