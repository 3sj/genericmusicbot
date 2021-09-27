/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "queue",
	description: "Displays the current queue of songs!",

	async run(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`:shrug: **There is nothing playing!**`)
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(`:family_man_boy: **Server Queue**\n${q}`)
	
	}
});
