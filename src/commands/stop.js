/** @format */

const { ShardClientUtil } = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "stop",
	description: "Stops the music",

	async run(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        client.distube.stop(message)
    
        message.react('👍')
	}
});
