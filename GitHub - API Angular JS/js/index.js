//Returns information from the user profile.
var app;
app = angular.module('indexPage', []);

//Returns information from the user profile.
app.controller('myProfile', function ($scope, $http) {
    $http.get("https://api.github.com/users/CarlosMiguelAzevedoCampos")
        .then(function (response) {
            if (response.status == 200) { //Everything is ok whit the call? True, No?, false.
                $scope.names = response.data.name;
                response.data.avatar_url == null ? $scope.image = "img/github.png" : $scope.image = response.data.avatar_url;
                response.data.bio == null ? "Sorry.., i can't read this user Bio." : $scope.bio = response.data.bio;
                response.data.location == null ? "Sorry.., i read this user location." : $scope.location = response.data.location;
                $scope.status = true;
            }
            else {
                $scope.status = false;
            }
        });
});


app.controller('myReposDescription', function ($scope, $http) {
    $http.get("https://api.github.com/users/CarlosMiguelAzevedoCampos/repos")
        .then(function (response) {
            if (response.status == 200) {
                $scope.repos = response.data;
                $scope.status = true;
            }
            else {
                $scope.status = false;
            }
        });
});