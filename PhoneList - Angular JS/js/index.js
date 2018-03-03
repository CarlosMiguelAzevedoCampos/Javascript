var app;
app = angular.module('indexPage', []);

app.controller('myListInput', function ($scope) {
    $scope.phonelist = []; //Array to save phone numbers
    $scope.addPhone = function () {
        if ($scope.newPhone != undefined && $scope.namePhone != undefined) { //Fields empty?
            if (!searchPhone($scope.phonelist, $scope.namePhone)) { //Phone name already exists?
                $scope.phonelist.push({
                    name: $scope.namePhone,
                    phone: $scope.newPhone
                });
                $scope.notice = "Phone number added successfully!";
            }
            else {
                $scope.notice = "This phone name already exists!";
            }
        }
        else {
            $scope.notice = "You didn't entered any data";
        }
    }

    $scope.deletePhone = function ($index) {
        $scope.phonelist.splice($index, 1); //delets the clicked number
        $scope.notice = "Phone number removed successfully!";
    }
});

//check if phone name already exists
var searchPhone = function (array, name) {
    var i = array.length;
    for (e = 0; e < i; e++) {
        if (array[e].name == name) {
            return true;
        }
    }
    return false;
}