angular.module('twitchApp')

.controller('TwitchController', ['$scope', '$http', function ($scope, $http) {

    var header = {'Client-ID': 'cjt0vhb74q2qol0cjbecfthzx78gbb'}
    var url = 'https://api.twitch.tv/helix/streams';

    $scope.streamlist = [];

    var onComplete = function (response) {
        $scope.streamlist = response.data;
        console.log($scope.streamlist);
    };

    var onError = function (reason) {
        $scope.error = "Could not find this account";
    };

    $scope.search = function (searchterm) {
        $http(
            {method: 'GET',
             url: url,
            headers: header
            })
            .then(onComplete, onError);
    };
}]);
