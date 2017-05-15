angular.module('twitchApp')

.controller('TwitchController', ['$scope', '$http', function ($scope, $http) {

    var idnumber = 'cjt0vhb74q2qol0cjbecfthzx78gbb';

    $scope.streamlist = [];

    var onComplete = function (response) {
        $scope.streamlist = response.data;
        console.log($scope.streamlist);
    };

    var onError = function (reason) {
        $scope.error = "Could not find this account";
    };

    $scope.search = function (searchterm) {
        $http.get('https://api.twitch.tv/kraken/search/streams/?q=' + searchterm + '&limit=100&client_id=' + idnumber)
            .then(onComplete, onError);
    }
}]);
