"use strict";

const Path = require('path');
const Hapi = require('hapi');
const Wreck = require('wreck');
const server = new Hapi.Server({
    port: 3000
});

server.register({
    plugin: require('vision')
}).then(() => {
    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'
    });

    const handler = (request, h) => {
        return h.view("home");
    }

    server.route({
        method: 'GET',
        path: '/',
        handler
    });

    server
        .start()
        .then(() => {
            console.log(`Server running at: ${server.info.uri}`);
        }) // if needed
        .catch(err => {
            console.log(err)
        });
});
