//Returns information from the user profile.
var app;
app = angular.module('reposPage', []);

//Returns information from the user repo.
app.controller('repoName', function ($location, $scope, $http) {
    var url = "https://api.github.com/repos/CarlosMiguelAzevedoCampos/";
    $http.get(url.concat($location.search().reponame).concat("/contents"))
        .then(function (response) {
            if (response.data.length == 0) {
                $scope.data = false;
            }
            else {
                $scope.data = true;
                $scope.response = response.data;
            }
            response.status == 200 ? $scope.status = true : $scope.status = false; //Everything is ok whit the call? True, No?, false.
        });
});
