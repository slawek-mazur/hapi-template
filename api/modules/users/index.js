var users = require('./users');

exports.register = function (server, options, next) {



    server.route({
        path: '/users',
        method: 'GET',
        handler: users.getUsers
    });

    server.route({
        path: '/users/{username}',
        method: 'GET',
        handler: users.userInfo
    });

    next();

};

exports.register.attributes = {
    pkg: require('./package.json')
};