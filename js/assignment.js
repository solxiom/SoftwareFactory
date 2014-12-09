/**
 * Created by Kavan Soleimanbeigion 9.12.2014.
 */
angular.module("assignmentApp", [])
    .controller("appCtrl", function ($scope, assignmentSvc) {

        assignmentSvc.updateScope($scope);

        $scope.updateOutput = function () {
            assignmentSvc.updateScope($scope);
        };
    })
    .factory("assignmentSvc", function () {

        function updateScopeImpl(scope) {
            if (typeof scope === 'undefined') {
                return;
            }
            return typeof scope.string !== "undefined" && scope.string.length > 0 ?
                setvariables(scope) : init(scope);
        }

        function setvariables(scope) {
            scope.strLength = scope.string.length;
            scope.words = wordCount(scope);
            scope.reverse = scope.string.split("").reverse().join("");
        }

        function init(scope) {
            scope.strLength = 0;
            scope.words = 0;
            scope.reverse = "";
        }

        function wordCount(scope) {
            return scope.string.split(" ").length;
        }

        return{
            /**
             * service interface
             * notice: if the input value is empty
             * this will set the view variables to 0 and empty
             * @param scope
             * @returns { scope.strLength, scope.words, scope.reverse}
             */
            updateScope: function (scope) {
                return updateScopeImpl(scope);
            }
        }
    })
/**
 * a simple angular directive for catching user keyPress events
 */
    .directive('ngKeypress', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function () {
                scope.$apply(function () {
                    scope.$eval(attrs.ngKeypress);
                });

            });
        };
    });
