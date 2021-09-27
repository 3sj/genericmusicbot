/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
	console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
});
