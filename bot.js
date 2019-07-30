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

//--CHIT CHAT---
//--Regular--
if (msg.content.toLowerCase().startsWith(`hi <@599466909708189706>`)) {
    msg.channel.send(`Hello! <:grinz:603408755677200412>`);
   }
if (msg.content.toLowerCase().startsWith(`hello <@599466909708189706>`)) {
    msg.channel.send(`Greetings! <:grinz:603408755677200412>`);
   }
if (msg.content.toLowerCase().startsWith(`<@599466909708189706> hi`)) {
    msg.channel.send(`Hello! <:grinz:603408755677200412>`);
   }
if (msg.content.toLowerCase().startsWith(`<@599466909708189706> hello`)) {
    msg.channel.send(`Greetings! <:grinz:603408755677200412>`);
   }
if (msg.content.toLowerCase().includes(`<@599466909708189706>`)) {
		var msg1 = Array(5); 
		msg1[1] = `${msg.author} Can I help you?`;
	    	msg1[2] = `${msg.author} Huh?`;
		msg1[3] = `${msg.author} Yeah?`;
		msg1[4] = `${msg.author} What?`;
		msg1[5] = `${msg.author} :question:`
		msg1[6] = `${msg.author} Sup?`
		//msg1[6] = `${msg.author} You know I love Bobbo so much <:luv:550567524320804875>`
        	var x = getRandomInt(0, 20);
		if (x < 5){ 
        	if (x < 3){
		msg.channel.send(msg1[1]);
		}
		else {
               	msg.channel.send(msg1[3]);
		}
		}
		else if (x<= 9) {
		if (x >= 7){
		msg.channel.send(msg1[2]); }
		else{
                msg.channel.send(msg1[4]);
				}
		} 
		else if (x <= 12 ) { 
			msg.channel.send(msg1[5]);
		}
		else {
			msg.channel.send(msg1[6])
		}
}



//--!--
if (msg.content.toLowerCase().startsWith(`hi <@!599466909708189706>`)) {
    msg.channel.send(`Hello! <:grinz:603408755677200412>`);
   }
if (msg.content.toLowerCase().startsWith(`hello <@!599466909708189706>`)) {
    msg.channel.send(`Greetings! <:grinz:603408755677200412>`);
   }
if (msg.content.toLowerCase().startsWith(`<@!599466909708189706> hi`)) {
    msg.channel.send(`Hello! <:grinz:603408755677200412>`);
   }
if (msg.content.toLowerCase().startsWith(`<@!599466909708189706> hello`)) {
    msg.channel.send(`Greetings! <:grinz:603408755677200412>`);
   }
if (msg.content.toLowerCase().includes("<@!599466909708189706>")) {
		var msg1 = Array(5); 
		msg1[1] = `${msg.author} Can I help you?`;
	    	msg1[2] = `${msg.author} Huh?`;
		msg1[3] = `${msg.author} Yeah?`;
		msg1[4] = `${msg.author} What?`;
		msg1[5] = `${msg.author} :question:`
		msg1[6] = `${msg.author} Sup?`
		//msg1[6] = `${msg.author} You know I love Bobbo so much <:luv:550567524320804875>`
        	var x = getRandomInt(0, 20);
		if (x < 5){ 
        	if (x < 3){
		msg.channel.send(msg1[1]);
		}
		else {
               	msg.channel.send(msg1[3]);
		}
		}
		else if (x<= 9) {
		if (x >= 7){
		msg.channel.send(msg1[2]); }
		else{
                msg.channel.send(msg1[4]);
				}
		} 
		else if (x <= 12 ) { 
			msg.channel.send(msg1[5]);
		}
		else {
			msg.channel.send(msg1[6])
		}
}




//---MENTION PART---
//Tsathoggua
if (msg.content.toLowerCase().startsWith(`!howgay <@557942571238817802>`)) {
    msg.channel.send(`<@557942571238817802> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }
  
//Tsathoggua!
if (msg.content.toLowerCase().startsWith(`!howgay <@!557942571238817802>`)) {
    msg.channel.send(`<@!557942571238817802> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Leib
if (msg.content.toLowerCase().startsWith(`!howgay <@599466909708189706>`)) {
    msg.channel.send(`<@!599466909708189706> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Leib!
if (msg.content.toLowerCase().startsWith(`!howgay <@!599466909708189706>`)) {
    msg.channel.send(`<@!599466909708189706> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Bobbo
if (msg.content.toLowerCase().startsWith(`!howgay <@284503198163664906>`)) {
    msg.channel.send(`<@284503198163664906> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Bobbo!
if (msg.content.toLowerCase().startsWith(`!howgay <@!284503198163664906>`)) {
    msg.channel.send(`<@!284503198163664906> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//BigBeaw
if (msg.content.toLowerCase().startsWith(`!howgay <@498363941148295178>`)) {
    msg.channel.send(`<@498363941148295178> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//BigBeaw!
if (msg.content.toLowerCase().startsWith(`!howgay <@!498363941148295178>`)) {
    msg.channel.send(`<@!498363941148295178> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Pokie
if (msg.content.toLowerCase().startsWith(`!howgay <@364159456822427662>`)) {
    msg.channel.send(`<@364159456822427662> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Pokie!
if (msg.content.toLowerCase().startsWith(`!howgay <@!364159456822427662>`)) {
    msg.channel.send(`<@!364159456822427662> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//gabu
if (msg.content.toLowerCase().startsWith(`!howgay <@330204645278613504>`)) {
    msg.channel.send(`<@330204645278613504> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//gabu!
if (msg.content.toLowerCase().startsWith(`!howgay <@!330204645278613504>`)) {
    msg.channel.send(`<@!330204645278613504> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//June
if (msg.content.toLowerCase().startsWith(`!howgay <@171184536158339073>`)) {
    msg.channel.send(`<@171184536158339073> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//June!
if (msg.content.toLowerCase().startsWith(`!howgay <@!171184536158339073>`)) {
    msg.channel.send(`<@!171184536158339073> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Lunar
if (msg.content.toLowerCase().startsWith(`!howgay <@456940234714775587>`)) {
    msg.channel.send(`<@456940234714775587> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Lunar!
if (msg.content.toLowerCase().startsWith(`!howgay <@!456940234714775587>`)) {
    msg.channel.send(`<@!456940234714775587> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Steve
if (msg.content.toLowerCase().startsWith(`!howgay <@186445902188118016>`)) {
    msg.channel.send(`<@186445902188118016> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Steve!
if (msg.content.toLowerCase().startsWith(`!howgay <@!186445902188118016>`)) {
    msg.channel.send(`<@!186445902188118016> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Kyle
if (msg.content.toLowerCase().startsWith(`!howgay <@239398825289187328>`)) {
    msg.channel.send(`<@239398825289187328> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Kyle!
if (msg.content.toLowerCase().startsWith(`!howgay <@!239398825289187328>`)) {
    msg.channel.send(`<@!239398825289187328> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Daniel
if (msg.content.toLowerCase().startsWith(`!howgay <@459766201019662337>`)) {
    msg.channel.send(`<@459766201019662337> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Daniel!
if (msg.content.toLowerCase().startsWith(`!howgay <@!459766201019662337>`)) {
    msg.channel.send(`<@!459766201019662337> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Kalki
if (msg.content.toLowerCase().startsWith(`!howgay <@356065937318871041>`)) {
    msg.channel.send(`<@356065937318871041> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Kalki!
if (msg.content.toLowerCase().startsWith(`!howgay <@!356065937318871041>`)) {
    msg.channel.send(`<@!356065937318871041> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Salomon
if (msg.content.toLowerCase().startsWith(`!howgay <@159985870458322944>`)) {
    msg.channel.send(`<@159985870458322944> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Salomon!
if (msg.content.toLowerCase().startsWith(`!howgay <@!159985870458322944>`)) {
    msg.channel.send(`<@!159985870458322944> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Slime
if (msg.content.toLowerCase().startsWith(`!howgay <@127296623779774464>`)) {
    msg.channel.send(`<@127296623779774464> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Slime!
if (msg.content.toLowerCase().startsWith(`!howgay <@!127296623779774464>`)) {
    msg.channel.send(`<@!127296623779774464> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Vince
if (msg.content.toLowerCase().startsWith(`!howgay <@476316076288901131>`)) {
    msg.channel.send(`<@476316076288901131> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

//Vince!
if (msg.content.toLowerCase().startsWith(`!howgay <@!476316076288901131>`)) {
    msg.channel.send(`<@!476316076288901131> are `+ getRandomInt(1, 100)+"% gay! :gay_pride_flag:");
   }

	
});
  

client.login(process.env.BOT_TOKEN);
