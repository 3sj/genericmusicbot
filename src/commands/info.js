/** @format */

const Command = require("../Structures/Command.js");
const Discord = require('discord.js');

module.exports = new Command({
	name: "info",
	description: "Bot info!",

    

	async run(message, args, client) {
		const infoEmbed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		infoEmbed
			.setAuthor("Bot Information:", user.avatarURL({ dynamic: true }))
			.setColor(message.guild.me.displayHexColor)
			.setTimestamp()
			.addFields(
                {
					name: "Bot Name",
					value: client.user.username,
					inline: false
				},
                {
					name: "Bot Version",
					value: "2.1.0",
					inline: false
				},
                {
					name: "Servers",
					value: `${client.guilds.cache.size}`,
					inline: false
				},
                {
					name: "Channels",
					value: `${client.channels.cache.size}`,
					inline: true
				},
                {
					name: "Users", 
                    value: `${client.users.cache.size}`, 
                    inline: true
				},
			);

		message.reply({ embeds: [infoEmbed] }); 
	}
});
