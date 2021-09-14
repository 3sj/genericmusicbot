module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    const queue = bot.distube.getQueue(message)
    if (!queue) return message.channel.send(`:shrug: **There is nothing playing!**`)
    const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
    message.channel.send(`:family_man_boy: **Server Queue**\n${q}`)
    
}

module.exports.config = {
    name: "queue",
    aliases: ["q"]
}
