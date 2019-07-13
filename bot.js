const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity('yourGameNameHere', { type: 'PLAYING' });
 });
client.login(process.env.BOT_TOKEN);
