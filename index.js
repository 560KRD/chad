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
  'wednesday',
  'haram',
  'dyl',
  'british',
  'mimir',
  'pepper',
  'monday',
  'shekel',
  'dice',
  'gregor',
  'serbia',
]

bot.on('message', msg => {
  let args = msg.content.toLowerCase().substring(process.env.PREFIX.length).split(/\s+/g);
  let text = msg.content;

  if(!text.startsWith(process.env.PREFIX)) return;

  if (globalCooldown.has(msg.author.id) && (msg.author.id !== '796126990981791784' || msg.author.id !== '698051518754062387')) {
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


    if (msg.author.id === '796126990981791784' || msg.author.id === '698051518754062387' || msg.author.id === '534735723027365889') haramLevel = 0




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

  if (args[0] === 'dyl') {
    msg.channel.send('https://cdn.discordapp.com/attachments/707451317626470455/798586756441440266/ali.mp4').then(Smsg => {
      Smsg.react('😭')
    })
    return;
  }




  if (args[0] === 'british') {
    msg.channel.send('<@449282503254081537> https://cdn.discordapp.com/attachments/707451317626470455/796828973341999104/Briish_meme.mp4').then(Smsg => {
      Smsg.react('🇬🇧')
    })
    return;
  }



  if (args[0] === 'shekel') {
    msg.channel.send('https://cdn.discordapp.com/attachments/757169664848691272/817334810661093406/shekelboss.mp4').then(Smsg => {
      Smsg.react('✡️')
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




if (args[0] === 'gregor') {
    msg.channel.send('https://tenor.com/view/5shekels-gif-18220408').then(Smsg => {
      Smsg.react('✡️')
    })
    return;
  }	


  if (args[0] === 'serbia') {
    msg.channel.send('https://cdn.discordapp.com/attachments/818259825284218920/818991205328617483/online.mp4').then(Smsg => {
      Smsg.react('🇷🇸')
    })
    return;
  }
	

  if(args[0] === 'howgay') {

    let gayness = (Math.floor(Math.random() * 101));


    if (msg.author.id === '796126990981791784' || msg.author.id === '698051518754062387' || msg.author.id === '534735723027365889') gayness = 0
    if (msg.author.id === '743576847530459196'  ||  msg.author.id === '681281957824299035') gayness = 150

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
