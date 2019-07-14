const Discord = require('discord.js');

const client = new Discord.Client();

//Type
//0: playing
//1: streaming
//2: listening
//3: watching

client.on('ready', () => {
client.user.setPresence({ game: { name: `JoJo's Bizarre Adventure: Golden Wind`, type: 3 } });
});
client.login(process.env.BOT_TOKEN);
