/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "servers",
	description: "Restricted command to certain discord user IDs",

	async run(message, args, client) {
        if (message.author.id == "283975208547647489") {
            message.channel.send(`**Current Discords:**`)
            client.guilds.cache.forEach(guild => {
                message.channel.send(`${guild.name} | ID: \`${guild.id}\` | Members: \`${guild.memberCount}\``);
            }) 
        } else if (message.author.id == "539726918191415308") {
            message.channel.send(`**Current Discords:**`)
            client.guilds.cache.forEach(guild => {
                message.channel.send(`${guild.name} | ID: \`${guild.id}\` | Members: \`${guild.memberCount}\``);
            })
        } else return message.reply("You do not have permission to use this command!");
    }
});
