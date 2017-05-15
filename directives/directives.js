angular.module('twitchApp')

.directive('pageHeader', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/pages/page-header.html'
        };
    })
    .directive('twitchPage', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/pages/twitch-page.html'
        };
    })
    .directive('twitchData', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/pages/twitch-data.html'
        };
    })
    .directive('pageFooter', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/pages/page-footer.html'
        };
    });
