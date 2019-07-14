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

client.on('message', message => {

	var sender = message.author;
	var msg = message.content.toUpperCase();
  
  if (sender.id === `599466909708189706`){
		return;
	}
  
  if (msg.includes(`HOLD ME LEIB`)){
		message.channel.send(`${message.author} I'm holding you *pats* I'ts okay, everything's gonna be just fine <:smoiles:600081599320817685>`);
	}

});
  


client.login(process.env.BOT_TOKEN);
