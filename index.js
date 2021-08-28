const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! this is \nChad the bot");
});

app.listen(port, () => console.log(`Chad app listening at http://localhost:${port}`));

const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config();

const globalCooldown = require('./assets/globalCooldown.js').globalCooldown;
const sleep = require('./assets/sleep.js').sleep;

bot.on('ready', () => {
  bot.user.setActivity('Type -help');
  console.info(`Logged in as ${bot.user.tag}!`);
});


let HelpArr = [
  'help',
  'howgay',
  'wednesday',
  'haram',
  'callum',
  'british',
  'mimir',
  'pepper',
  'monday',
  'macedonia',
  'dice',
  'alide',
  'arabs',
]

bot.on('message', msg => {
  let args = msg.content.toLowerCase().substring(process.env.PREFIX.length).split(/\s+/g);
  let text = msg.content;

  if (text.toLowerCase().includes('cry about it') || (text.toLowerCase().includes('cry ab it'))) {
		msg.channel.send('https://tenor.com/view/hd-he-said-cry-about-gif-20569679');
	}

  if (text.toLowerCase().includes('turkey') || (text.toLowerCase().includes('turkiye') || (text.toLowerCase().includes('türkiye')))) {
		msg.channel.send('https://tenor.com/view/turkish-turk-mad-screaming-angry-gif-16839516');
	}

  if (text.toLowerCase().includes('forgor') || (text.toLowerCase().includes('forgot'))) {
		msg.channel.send('https://cdn.discordapp.com/attachments/854341572573397022/880175781521805333/cover2.png');
	}

  if(!text.startsWith(process.env.PREFIX)) return;

  if (globalCooldown.has(msg.author.id) && (msg.author.id !== '853409350986367018' || msg.author.id !== '698051518754062387')) {
		msg.channel.send('Cooldown 2 sec').then((msge) => {
			msge.delete({ timeout: 5000 });
		});
		return;
  }
  
  globalCooldown.add(msg.author.id);
	setTimeout(() => {
		globalCooldown.delete(msg.author.id);
	}, 2000);




  if (args[0] === 'help') {
    let HelpEmbed = new Discord.MessageEmbed()
      .setTitle('Bot commands')
      .setColor('#e5e5e5')
      .setDescription(HelpArr)
    return msg.channel.send(HelpEmbed);
  }

  
  if(args[0] === 'haram'){

    let haramLevel = (Math.floor(Math.random() * 101));


    if (msg.author.id === '853409350986367018' || msg.author.id === '698051518754062387' || msg.author.id === '534735723027365889') haramLevel = 0




    if (haramLevel === 0){
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Haram-O-Meter')
        .setColor('#e5e5e5')
        .setDescription(`Halalest boy🙏🙏🙏: ${haramLevel}%`)
        .setThumbnail(msg.author.avatarURL())
  
        return msg.channel.send(exampleEmbed);
    }

    if (haramLevel <= 20){
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Haram-O-Meter')
        .setColor('#e5e5e5')
        .setDescription(`Mashallah my brother, see you at friday prayer👍👍👍: ${haramLevel}%`)
        .setThumbnail(msg.author.avatarURL())
  
        return msg.channel.send(exampleEmbed);
    }






    
    
    if (haramLevel === 50){
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Haram-O-Meter')
        .setColor('#e5e5e5')
        .setDescription(`Half, half ain't that bad: ${haramLevel}%`)
        .setThumbnail(msg.author.avatarURL())
  
      return msg.channel.send(exampleEmbed);
    }

    if (haramLevel > 50){
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Haram-O-Meter')
        .setColor('#e5e5e5')
        .setDescription(`Astagfirullah, go pray👎👎👎: ${haramLevel}%`)
        .setThumbnail(msg.author.avatarURL())
  
      return msg.channel.send(exampleEmbed);
    }


    if (haramLevel < 50){
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Haram-O-Meter')
        .setColor('#e5e5e5')
        .setDescription(`Mashallah my brother, see you at friday prayer👍👍👍: ${haramLevel}%`)
        .setThumbnail(msg.author.avatarURL())
  
        return msg.channel.send(exampleEmbed);
    }
  }
  


  
  if (args[0] === 'wednesday') {
    msg.channel.send('https://cdn.discordapp.com/attachments/752042865349230662/797593338248822825/white_girl_wednesday.mp4').then(Smsg => {
      Smsg.react('💫')
    })
    return;
  }



  if (args[0] === 'monday') {
    msg.channel.send('https://cdn.discordapp.com/attachments/797563220020822038/797901122647883796/mp5monday.mp4').then(Smsg => {
      Smsg.react('🔫')
    })
    return;
  }



  if (args[0] === 'mimir') {
    msg.channel.send('https://cdn.discordapp.com/attachments/752042865349230662/797591796372865084/video0_5.mp4').then(Smsg => {
      Smsg.react('💤')
    })
    return;
  }

  if (args[0] === 'pepper') {
    msg.channel.send('https://cdn.discordapp.com/attachments/797563220020822038/798580702580047912/videoplayback.mp4').then(Smsg => {
      Smsg.react('🧂')
    })
    return;
  }

  if (args[0] === 'callum') {
    msg.channel.send('https://cdn.discordapp.com/attachments/880169162322903060/880172486078136421/sheep_booty.mp4').then(Smsg => {
    })
    return;
  }




  if (args[0] === 'british') {
    msg.channel.send('<@415264412178579498> https://cdn.discordapp.com/attachments/707451317626470455/796828973341999104/Briish_meme.mp4').then(Smsg => {
    })
    return;
  }



  if (args[0] === 'macedonia') {
    msg.channel.send('https://cdn.discordapp.com/attachments/880169162322903060/880170507616518174/video0-345.mp4').then(Smsg => {
    })
    return;
  }

  
 if (args[0] === 'dice') {
   
  let dice = (Math.floor(Math.random() * 5+1));
 
  let exampleEmbed = new Discord.MessageEmbed()
  .setTitle('Dice')
  .setColor('#e5e5e5')
  .setDescription(`You rolled a ${dice}!`)
  .setThumbnail(msg.author.avatarURL())

  return msg.channel.send(exampleEmbed);


 }




if (args[0] === 'arabs') {
    msg.channel.send('https://cdn.discordapp.com/attachments/874544698327441438/880168061267763240/arabs.mp4').then(Smsg => {
    })
    return;
  }	


  if (args[0] === 'alide') {
    msg.channel.send('https://cdn.discordapp.com/attachments/880169162322903060/880169776801013770/video0_25.mp4').then(Smsg => {
    })
    return;
  }
	

  if(args[0] === 'howgay') {

    let gayness = (Math.floor(Math.random() * 101));


    if (msg.author.id === '853409350986367018' || msg.author.id === '565164846564245504' || msg.author.id === '698051518754062387' || msg.author.id === '498821610879582209') gayness = 0
    if (msg.author.id === '751952781648330772'  ||  msg.author.id === '607256454558384158') gayness = 150

    if (gayness === 0){
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Gay detector')
        .setColor('#e5e5e5')
        .setDescription(`${gayness}%`)
        .setThumbnail(msg.author.avatarURL())
  
        return msg.channel.send(exampleEmbed);
  
    }
  
    if (gayness > 50){
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Gay detector')
        .setColor('#e5e5e5')
        .setDescription(`${gayness}%`)
        .setThumbnail(msg.author.avatarURL())
  
      return msg.channel.send(exampleEmbed);
    }


    if (gayness < 50){
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Gay detector')
        .setColor('#e5e5e5')
        .setDescription(`${gayness}%`)
        .setThumbnail(msg.author.avatarURL())
  
      return msg.channel.send(exampleEmbed);
    }
  }

})

bot.login(process.env.TOKEN);
