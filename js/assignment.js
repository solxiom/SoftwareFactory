/**
 * Created by Kavan Soleimanbeigion 9.12.2014.
 */
angular.module("assignmentApp", []).controller("appCtrl",function($scope){
    $scope.strLength = 0;
    $scope.words =  0;
    $scope.reverse = "";
    $scope.string ="";
//    $scope.updateOutput();
    $scope.updateOutput = function(){
        $scope.strLength = $scope.string.length;
        $scope.words = wordCount();
        $scope.reverse = $scope.string.split("").reverse().join("");;
    };
    function wordCount(){
        return $scope.string.split(" ").length;
    }
}).directive('ngKeypress', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {

                scope.$apply(function (){
                    scope.$eval(attrs.ngKeypress);
                });

        });
    };
});
