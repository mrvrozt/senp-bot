const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
client.user.setPresence({ game: { name: 'nameGoesHere', type: 0 } });
});
client.login(process.env.BOT_TOKEN);
