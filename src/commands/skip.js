/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "skip",
	description: "Skips to the next song!",

	async run(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);
    
        if(queue) {
            client.distube.skip(message)
    
            message.react('⏩') 
        } else if (!queue) {
            return
        };		
	}
});
