define(function (require) {
    'use strict';

    var ListView = require('Views/ListView');

    function showListView() {
        window.location.hash = '#list';
        var users = JSON.parse(localStorage.users);
        ListView.render({
            users: users
        });
    }

    return {
        start: showListView
    };

});
