/** @format */

console.clear();

const Client = require("./Structures/Client.js");

const config = require("./Data/config.json");

const client = new Client();

const DisTube = require('distube');
client.distube = new DisTube.default(client, { searchSongs: 1, emitNewSongOnly: true, leaveOnFinish: true, leaveOnEmpty: true });


client.start(config.token);
