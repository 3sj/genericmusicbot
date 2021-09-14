module.exports.run = async (bot, message, args) => {
    bot.on('message', message => {
        if (message.content === '!ping') {  
          message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms.\n:computer: API Latency is ${Math.round(bot.ws.ping)}ms`);
        }
      });
    }


module.exports.config = {
    name: "ping",
    aliases: ['']
}