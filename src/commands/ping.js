/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ping",
	description: "Shows the ping of the bot!",
	async run(message, args, client) {
		const msg = await message.reply(`Ping: ${client.ws.ping} ms.`);

		msg.edit(
			`🏓Latency is ${Date.now() - message.createdTimestamp}ms.\n:computer: API Latency is ${Math.round(client.ws.ping)}ms`
		);
	}
});
