define(function (require) {
    'use strict';

    var routes = [{
        hash: '#list',
        controller: 'ListController'
    }, {
        hash: '#add',
        controller: 'AddController'
    }];

    var defaultRoute = routes[0];
    var currHash = '';
    var isRouting = false;
    var hashCheckId = -1;

    function route(enable) {
        if (!Boolean(enable) && isRouting) {
            clearInterval(hashCheckId);
            isRouting = false;
            console.log('Stop Routing');
            return isRouting;
        }

        var wHash = window.location.hash;
        if (!wHash) {
            window.location.hash = defaultRoute.hash;
        }

        hashCheckId = setInterval(hashCheck, 100);
        isRouting = true;
        console.log('Start Routing');
        return isRouting;
    }

    function hashCheck() {
        var wHash = window.location.hash;
        if (wHash === currHash) {
            return;
        }

        routes.forEach(function (route_) {
            if (wHash === route_.hash) {
                console.log('load constructor: ' + route_.controller);
                loadController(route_.controller);
            }
        });
        currHash = window.location.hash;
    }

    function loadController(controllerName) {
        // require('Controllers/' + controllerName).start();
        require(['Controllers/' + controllerName], function (ctrl) {
            ctrl.start();
        });
    }

    return {
        startRouting: function () {
            route(true);
        },
        stopRouting: function () {
            route(false);
        },
        route: route,
        isRouting: isRouting
    };

});
