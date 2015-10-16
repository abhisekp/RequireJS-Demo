/* eslint no-use-before-define: 0 */

define(function (require) {
    'use strict';

    var AddView = require('Views/AddView');

    function showAddView() {
        window.location.hash = '#add';
        AddView.render();
        bindEvents();
    }

    function bindEvents() {
        var form = document.getElementById('add-user-form');
        var addUserInput = document.getElementById('user-name');

        if (form) {
            form.addEventListener('submit', function (ev) {
                ev.preventDefault();
                ev.stopPropagation();

                if (addUserInput) {
                    var username = addUserInput.value.trim();
                    if (username) {
                        var users = JSON.parse(localStorage.users);
                        var User = require('Models/User');

                        users.push(new User(username));
                        localStorage.users = JSON.stringify(users);
                        addUserInput.value = '';

                        require('Controllers/ListController').start();
                    }
                }
            }, false);
        }
    }

    return {
        start: showAddView
    };

});
