"use strict";

const Hapi = require('hapi');
const Wreck = require('wreck');
const server = new Hapi.Server({
    port: 3000
});

const handler = (request, h) => {
    return "Order API";
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
