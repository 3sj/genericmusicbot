const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'MessageEmbed']
});

const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube');

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true, leaveOnFinish: true, leaveOnEmpty: true })
bot.distube
    .on("playSong", (message, queue, song) => {
        const embed = new Discord.MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setTitle(song.name)
            .setURL(song.url)
            .setAuthor('Now playing', message.author.avatarURL())
            .setThumbnail(song.thumbnail)
            .addField('Channel', message.member.voice.channel, true)
            .addField('Song Duration', song.formattedDuration , true)

        message.channel.send(embed)
        //`**Playing** :notes: \`${song.name}\` - \`${song.formattedDuration}\`\n**Requested by** :technologist: ${song.user}`
	})
	.on("addSong", (message, queue, song) => message.channel.send(
        `:musical_note: **Added** \`${song.name}\` - \`${song.formattedDuration}\`\n**To the queue by** :technologist: ${song.user}`
    ))

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);
