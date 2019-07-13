const Discord = require('discord.js');

const client = new Discord.Client();
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("with Bobbo")
});


client.login(process.env.BOT_TOKEN);
