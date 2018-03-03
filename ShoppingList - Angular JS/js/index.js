var app;
app = angular.module('indexPage', []);

//Add or remove items from you'r shopping list
app.controller('myListInput', function ($scope) {
    $scope.cart = [];
    $scope.addItem = function(){
        if($scope.cart.indexOf($scope.newItem) == -1){ //item already exists?
            $scope.cart.push($scope.newItem);
            $scope.notice = "Item added to your shopping list.";
        }
        else{
            $scope.notice = "You already have this item in your shopping list.";
        }
    }
    $scope.deleteItem = function(index){ //deletes an item.
        $scope.cart.splice(index, 1);
        $scope.notice = "Item has been removed.";
    }
});