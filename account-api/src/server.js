"use strict";

const Hapi = require('hapi');
const Wreck = require('wreck');
const server = new Hapi.Server();

server.connection({
    port: 3000
});

server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
        return reply("Account API");
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
});
