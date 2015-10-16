/* eslint new-parens: 0 */

define(function (require) {
    'use strict';

    var User = require('Models/User');

    var users = [
        new User('John'),
        new User('Amy'),
        new User,
        new User('Jack')
    ];

    localStorage.users = JSON.stringify(users);

    var Router = require('Router');
    Router.route();
});
