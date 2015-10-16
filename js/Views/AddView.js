define(function (require) {
    'use strict';

    function render(view) {
        var appDiv = document.getElementById('app');
        if (appDiv) {
            var form = document.createElement('form');
            form.id = 'add-user-form';

            var input = document.createElement('input');
            input.type = 'text';
            input.id = 'user-name';
            form.appendChild(input);

            var btn = document.createElement('button');
            btn.id = 'add-user';
            btn.textContent = 'Add User';
            form.appendChild(btn);

            appDiv.innerHTML = '';
            appDiv.appendChild(form);
        }
    }

    return {
        render: render
    };

});
