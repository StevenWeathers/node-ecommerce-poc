"use strict";

const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const Wreck = require('wreck');
const server = new Hapi.Server();

server.connection({
    port: 3000
});


server.register(require('vision'), (err) => {

    Hoek.assert(!err, err);

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: function (request, reply) {
            return reply.view("home");
        }
    });

    server.start((err) => {
        if (err) {
            throw err;
        }

        console.log(`Server running at: ${server.info.uri}`);
    });
});
