const Discord = require('discord.js');

const client = new Discord.Client();

//Type
//0: playing
//1: streaming
//2: listening
//3: watching
let statuses = ["FAULTLINES - Breathe", 
"My Chemical Romance - Welcome to the Black Parade", 
"Evanescence - Everybody's Fool ", 
"Seether - Words As Weapons"];

client.on('ready', () => {
//client.user.setPresence({ game: { name: `Sdorica -mirage- with Tsathoggua`, type: 0 } });
//client.user.setPresence({ game: { name: `FAULTLINES - Breathe`, type: 2 } });
	
	setInterval(function() {
		let status = statuses[Math.floor(Math.random()*statuses.length)];
		client.user.setPresence({ game: { name: status, type: 2 } });
		}, 180000);
	
	
});

client.on('message', message => {

	var sender = message.author;
	var msg = message.content.toUpperCase();
  
  if (sender.id === `599466909708189706`){
		return;
	}
  
  if (msg.includes(`HOLD ME LEIB`)){
		message.channel.send(`${message.author} I'm holding you *pats* It's okay, everything's gonna be just fine <:smoiles:600081599320817685>`);
  }
	
  if (msg.includes(`HAHAHA`)){
		message.react('533180556637372428');
  }
	
  if (msg.includes(`HAHA`)){
		message.react('533180556637372428');
  }
	
  if (msg.includes(`NICE`)){
		message.react('561059592667136017');
  }
	
  if (msg.includes(`NOICE`)){
		message.react('561059592667136017');
  }

});
  


client.login(process.env.BOT_TOKEN);
