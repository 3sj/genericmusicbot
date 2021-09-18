module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Currend Discords:**`)
    bot.guilds.cache.forEach(guild => {
        message.reply(`${guild.name} | \`${guild.id}\``);
      })
}
    

module.exports.config = {
    name: "servers_dev_in",
    aliases: [""]
}
