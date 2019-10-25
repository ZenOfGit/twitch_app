angular.module('twitchApp')

.controller('TwitchController', ['$scope', '$http', function ($scope, $http) {

    // OLD API search
/*    var idnumber = 'cjt0vhb74q2qol0cjbecfthzx78gbb';*/
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



// OLD API search
/*    $scope.search = function (searchterm) {
        $http.get('https://api.twitch.tv/kraken/search/streams/?q=' + searchterm + '&limit=100&client_id=' + idnumber)
            .then(onComplete, onError);
    }*/