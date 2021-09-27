/** @format */

const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const { Queue } = require("distube");

module.exports = new Command({
	name: "play",
	description: "Plays music!",

	async run(message, args, client, song) {

        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        const music = args.join(" ");
        client.distube.play(message, music)
        
        client.distube
        .on("playSong", (queue, song) => {
            const playEmbed = new Discord.MessageEmbed();
            const userAvatar = message.author.avatarURL()
            playEmbed
                .setAuthor(`Now Playing`, userAvatar)
                .setTitle(`${song.name}`)
                .setURL(`${song.url}`)
                .setColor(message.guild.me.displayHexColor)
                .setThumbnail(`${song.thumbnail}`)
                .setTimestamp()
                .addFields(
                    {
                        name: "Channel",
                        value: `${message.member.voice.channel}`,
                        inline: true
                    },
                    {
                        name: "Song Duration",
                        value: `${song.formattedDuration}`,
                        inline: true
                    }
                );
            queue.textChannel.send({ embeds: [playEmbed] })
        })
        
	}
});
