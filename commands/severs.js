module.exports.run = async (bot, message, args) => {

    if (message.author.id == "283975208547647489") {
        message.channel.send(`**Current Discords:**`)
        bot.guilds.cache.forEach(guild => {
            message.channel.send(`${guild.name} | ID: \`${guild.id}\` | Members: \`${guild.memberCount}\``);
        }) 
    } else if (message.author.id == "539726918191415308") {
        message.channel.send(`**Current Discords:**`)
        bot.guilds.cache.forEach(guild => {
            message.channel.send(`${guild.name} | ID: \`${guild.id}\` | Members: \`${guild.memberCount}\``);
        })
    } else return message.reply("You do not have permission to use this command!");
}
    

module.exports.config = {
    name: "servers_dev_in",
    aliases: [""]
}
