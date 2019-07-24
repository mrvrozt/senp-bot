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
"Anderson Paak - Come Down",
"Bring Me The Horizon - Run",
"Dizzee Rascal - Heart Of A Warrior",
"Fall Out Boy - Champion",
"iSHi - We Run",
"Tech N9ne - Straight Out the Gate",
"Twenty One Pilots - Heavydirtysoul",
"The Weeknd - Party Monster",
"Imagine Dragons - Whatever It Takes",
"System Of A Down - Toxicity",
"Naughty Boy - Runnin' (Lose It All)",
"Sia - Chandelier",
"Sean Paul - She Doesn't Mind",
"Charlie Puth - We Don't Talk Anymore",
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
	
  if (msg.startsWith(`!PING`)){
		message.channel.send(`${message.author} Pong <:grinz:603408755677200412> :ping_pong: ` + Math.round(client.ping) + ` ms!`);
		//message.channel.send(`${message.author} Pong! `);
  }

});

client.on('message', msg => {
	
var sender = msg.author;	
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; }
	
if (sender.id === `599466909708189706`){
		return;
   }
	
if (msg.content.toLowerCase().startsWith(`!howgay <@557942571238817802>`)) {
    msg.channel.send(`<@557942571238817802> `+ getRandomInt(1, 100)+"% gay *aru*! :gay_pride_flag:");
   }
	
});
  

client.login(process.env.BOT_TOKEN);
