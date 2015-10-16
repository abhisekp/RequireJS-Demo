define(function () {
    'use strict';

    function render(view) {
        if (view && view.users) {
            var appDiv = document.getElementById('app');
            if (appDiv) {
                var users = view.users;

                var ul = document.createElement('ul');
                users.forEach(function (user) {
                    var li = document.createElement('li');
                    li.textContent = user.name;
                    ul.appendChild(li);
                });

                appDiv.innerHTML = '';
                appDiv.appendChild(ul);
            }
        }
    }

    return {
        render: render
    };

});
