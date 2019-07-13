const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
client.user.setPresence({ game: { name: `with Bobbo's belly`, type: 0 } });
});
client.login(process.env.BOT_TOKEN);
