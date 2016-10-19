'use strict'
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

let goodOptions = {
    reporters: {
        console: [
            {
                module: 'good-console',
                args: [{log: '*', response: '*'}]
            },
            'stdout'
        ]
    }
};

server.register([
    {
        register: require('inert')
    },
    {
        register: require('good'),
        options: goodOptions
    },
    {
        register: require('./modules/users'),
        routes: {
            prefix: '/api'
        }
    }
], err => {

    // Client
    server.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: './public',
                listing: false,
                index: true
            }
        }
    });

    server.start(() => console.log(`Started at: ${server.info.uri}`));

});
