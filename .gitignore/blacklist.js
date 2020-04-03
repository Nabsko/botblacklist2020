
request = require("request"),
Discord = require("discord.js"),
bot = new Discord.Client();
figlet = require('figlet');
colors = require('colors');
readline = require('readline');
ping = require('ping-lite');
dns = require('dns')
low = require('lowdb')
FileSync = require('lowdb/adapters/FileSync')
adapter = new FileSync('./db.json')
fs = require("fs");
db = low(adapter)
TIME2BAN = 170,
COOLDOWN = new Set();
const prefix = ("*");


db.defaults({
  owner: [632488914900222013],
  admins: [],
  blacklisted: [],
  bots: [],

}).write()





  
function getNow(strType) {
  let strReturn = '';
  switch (strType) {
      case 'date':
          strReturn = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris", day: "2-digit", month: "2-digit", year: "2-digit" });
          break;
      case 'time':
          strReturn = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
          break;
      case 'datetime':
          strReturn = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris", hour12: false, day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).replace(',', '');
          break;
  }
  return strReturn;
}



bot.on('ready', () => {
	console.clear();
            console.log(`
        ├── Connecté sous ${bot.user.tag}
        ├── Crée par Hichem
        ├── Discord API : ${Discord.version}
        ├──  ANTIRAID / BLACKLIST
        ├── EN DEVELOPPEMENT V7.2 ! 
            `.red)
            const asciify = require('asciify');
asciify('DAYS', {font: 'larry3d'}, function(err, res) { console.log(res.red)});
          

const

   channel =  bot.channels.find(c => c.name === "_terminal")
if (!channel) return;
channel.send(`> :thumbsup:  Démarrage des commandes`)

});

bot.on("guildMemberAdd", async member => {
  let guild = await member.guild.fetchMembers()
  const loungeVALID = bot.emojis.find(emoji => emoji.name === "valide");
  const loungeX = bot.emojis.find(emoji => emoji.name === "pasvalide");
  if (!db.get("blacklisted").find({ user_id: member.id }).value()) {
    null
    } else {
        member.kick(`Blacklist : Ce fils de pute a été viré du serveur!`)
      const channel = member.guild.channels.find('name', '_terminal');
      if (!channel) return;
      channel.send('`' + getNow('time') + '`' + ` :warning: L'utilisateur **${member.user.username}**#${member.user.discriminator} (` + '`' + member.user.id + '`) a tenté de rejoindre le serveur en étant Blacklist. = kick HAHA BABBYYYYYYYYYYYY')
    }
  });

bot.on('message', async msg => {

   const args = msg.content.split(/ +/);
  
if (msg.content.startsWith(prefix + 'ping')) {
  msg.channel.send(`> :thumbsup:  **Ping des protections **: ${Math.round(bot.ping)}ms`)
}

if (msg.content.startsWith(prefix + 'unbl')) {
  const member = msg.mentions.members.first();
  if(!db.get("admins").find({ user_id: msg.author.id }).value()) {
    msg.channel.send(`> :smiling_imp:  **Vous ne disposez pas des permissions nécessaires.**`);
  } else {
      let args = msg.content.split(" ").slice(1);
      let id = args.join(" ")
      if(!args[0]) return msg.channel.send(`> :smiling_imp:  **Merci d'entrer un ID valide.**`);
      if(!db.get("blacklisted").find({ user_id: id }).value()) {
          msg.channel.send(`> ** :smiling_imp:   L'ID ` + '`' + id + "` ne figure pas dans la blacklist.**");
      } else {
          db.get("blacklisted").remove({ user_id: id }).write()
           const black = new Discord.RichEmbed()
          .setAuthor(` :thumbsup:  La suppression du membre a été fais avec succès `)
          .setDescription(` :sunglasses:  <@${id}> **à été enlevé a la blacklist du serveur par ${msg.author.tag}**` + `\n`
          	+ ` \n  __**Affichage de L'ID...**__ \n` + `**➜ ID numéro** : `+ '*`'+ `[${id}]` +'`*')

          msg.channel.send(black);
        const dm = new Discord.RichEmbed()
 .setAuthor(`:sunglasses:  NOUVEAU MEMBRE RETIRER DE LA BLACKLIST \n\n`)
          .setDescription(` :thumbsup:  <@${id}> à été retiré de la blacklist du serveur par ${msg.author.tag}`)

          bot.users.get(ow).send(dm);
          console.log(` ${id} viens d'être enlevé de la blacklist par ${msg.author.tag}`.red)
const channel = bot.channels.find('name', 'command');
if (!channel) return;
channel.send('`' + getNow('time') + '`' + ` :wrench: **${msg.author.tag}** (` + '`' + msg.author.id + '`) a utilisé la commande `' + msg.content + '`' + ` dans **${msg.channel.name}**` )
const log = bot.channels.find('name', '_terminal');
if (!log) return;
log.send('`' + getNow('time') + '`' + ` :warning: **${msg.author.tag}** (` + '`' + msg.author.id + '`)' + ` a enlevé de la blacklist l'ID ` + '`'  + args + '`')
      }
    }
  }
  
  if (msg.content.startsWith(prefix + 'bl')) {
    const member = msg.mentions.members.first();
  if (!db.get("admins").find({ user_id: msg.author.id }).value()) {
    msg.channel.send(`> :smiling_imp:  **Vous ne disposez pas des permissions nécessaires.**`);
  } else {
      let args = msg.content.split(" ").slice(1, 2);
      let id = args.join(" ")
      if (!args[0]) return msg.channel.send(` :thumbsup:  **Merci d'entrer un ID valide.**`);
      if (!db.get("blacklisted").find({ user_id: id }).value()) {
          db.get("blacklisted").push({ user_id: id }).write()

          const black = new Discord.RichEmbed()
          .setAuthor(` :thumbsup:  L'ajout du membre a été fais avec succès `)
          .setDescription(` :sunglasses:  <@${id}> **à été ajouté a la blacklist du serveur par ${msg.author.tag}**` + `\n`
          	+ ` \n  __**Affichage de L'ID...**__ \n` + `**➜ ID numéro** : `+ '*`'+ `[${id}]` +'`*')

          msg.channel.send(black);


const dm = new Discord.RichEmbed()
 .setAuthor(`:sunglasses:  NOUVEAU MEMBRE AJOUTER A LA BLACKLIST \n\n`)
          .setDescription(` :thumbsup:  <@${id}> à été ajouté a la blacklist du serveur par ${msg.author.tag}`)

          bot.users.get(ow).send(dm);
          //msg.channel.send(`> :thumbsup:  <@${id}> à été ajouté a la blacklist du serveur.`)
          console.log(` ${id}  viens d'être ajouté à la blacklist par ${msg.author.tag}`.blue)
          const channel = bot.channels.find('name', 'command');
          if (!channel) return;
          channel.send('`' + getNow('time') + '`' + ` :wrench: **${msg.author.tag}** (` + '`' + msg.author.id + '`) a utilisé la commande `' + msg.content + '`' + ` dans **${msg.channel.name}**` )
const log = bot.channels.find('name', '_terminal');
if (!log) return;
log.send('`' + getNow('time') + '`' + ` :warning: **${msg.author.tag}** (` + '`' + msg.author.id + '`)' + ` a ajouté dans la blacklist l'ID ` + '`'  + args + '`')
} else {
          msg.channel.send('`' + getNow('time') + '`' + ` :smiling_imp:  L'ID est déjà présente dans la **blacklist** !`)
      }
    }
  }



if (msg.content.startsWith(prefix + 'owner')) { 
  if (msg.author.id === '632488914900222013') {
      const member = msg.mentions.members.first();
      if (!member) return msg.channel.send(`:smiling_imp:  ** Merci de mentionner un utilisateur.**`)
      if (!db.get("owner").find({ user_id: member.id }).value()) {
          db.get("owner").push({ user_id: member.id }).write()
          msg.channel.send(`> :thumbsup:  <@${member.id}> est désormais owner du bot`)
          console.log(`${member.user.username} à été ajouté à la fondation du bot`.blue)
          const channel = bot.channels.find('name', 'command');
          if (!channel) return;
          channel.send('`' + getNow('time') + '`' + `> :wrench: **${msg.author.tag}** (` + '`' + msg.author.id + '`) a utilisé la commande `' + msg.content + '`' + ` dans **${msg.channel.name}**` )
          const log = bot.channels.find('name', '_terminal');
          if (!log) return;
          log.send('`' + getNow('time') + '`' + `>  :warning: **${msg.author.tag}** (` + '`' + msg.author.id + '`) a ajouté le member `' + member.user.tag + '`' + ` en tant qu'administrateur du BOT!` )
       } else {
        msg.channel.send(`> :thumbsup:  L'utilisateur <@${member.id}> est déja owner`);
      }
  } else {
    msg.channel.send(`> :smiling_imp:   Vous ne disposez pas des permissions nécessaires.`);
  }
  }

  if (msg.content.startsWith(prefix + 'derank')) { 
    if (msg.author.id === '632488914900222013') {
        const member = msg.mentions.members.first();
        if (!member) return msg.channel.send(`:smiling_imp:  ** Merci de mentionner un utilisateur.**`)
        if (!db.get("owner").find({ user_id: member.id }).value()) {
            msg.channel.send(`> ** :smiling_imp:   Le member ` + '`' + id + "` ne figure pas dans la fondation du bot :robot:**");
        } else {
          db.get("owner").remove({ user_id: member.id}).write()
          msg.channel.send(`> :thumbsup:  L'utilisateur <@${member.id}> n'est plus owner du bot`);
          console.log(`${member.user.username} à été enlevé de la fondation du bot`.green)
        }
            const channel = bot.channels.find('name', 'command');
            if (!channel) return;
            channel.send('`' + getNow('time') + '`' + `> :wrench: **${msg.author.tag}** (` + '`' + msg.author.id + '`) a utilisé la commande `' + msg.content + '`' + ` dans **${msg.channel.name}**` )
            const log = bot.channels.find('name', '_terminal');
            if (!log) return;
            log.send('`' + getNow('time') + '`' + `>  :warning: **${msg.author.tag}** (` + '`' + msg.author.id + '`) a enlevé le member `' + member.user.tag + '`' + ` en tant qu'administrateur du BOT!` )
         } else {
          msg.channel.send(`> :thumbsup:  L'utilisateur <@${member.id}> n'est plus owner`);
        }
    }
   
if (msg.content.startsWith(prefix + 'admin')) {
    const member = msg.mentions.members.first();
  if (!db.get("owner").find({ user_id: msg.author.id }).value()) {
    msg.channel.send(`> :smiling_imp:  **Vous ne disposez pas des permissions nécessaires.**`);
  } else {
      let args = msg.content.split(" ").slice(1, 2);
      let id = args.join(" ")
      if (!member) return msg.channel.send(`:smiling_imp:  ** Merci de mentionner un utilisateur.**`)
      if (!db.get("admins").find({ user_id: member.id }).value()) {
          db.get("admins").push({ user_id: member.id }).write()
          msg.channel.send(`> :thumbsup:  <@${member.id}> à été ajouté a l'administratation du bot.`)
          console.log(` ${member.user.username}  viens d'être ajouté à l'administation par ${msg.author.tag}`.blue)
          const channel = bot.channels.find('name', 'command');
          if (!channel) return;
          channel.send('`' + getNow('time') + '`' + ` :wrench: **${msg.author.tag}** (` + '`' + msg.author.id + '`) a utilisé la commande `' + msg.content + '`' + ` dans **${msg.channel.name}**` )
const log = bot.channels.find('name', '_terminal');
if (!log) return;
log.send('`' + getNow('time') + '`' + ` :warning: **${msg.author.tag}** (` + '`' + msg.author.id + '`)' + ` a ajouté dans l'administratation l'ID ` + '`'  + args + '`')
} else {
          msg.channel.send('`' + getNow('time') + '`' + ` :smiling_imp:  L'ID est déjà présente dans **l'administratation** !`)
      }
    }
  }
 if (msg.content.startsWith(prefix + 'unadmin')) {
    const member = msg.mentions.members.first();
  if (!db.get("owner").find({ user_id: msg.author.id }).value()) {
    msg.channel.send(`> :smiling_imp:  **Vous ne disposez pas des permissions nécessaires.**`);
  } else {
      let args = msg.content.split(" ").slice(1, 2);
      let id = args.join(" ")
   if (!member) return msg.channel.send(`:smiling_imp:  ** Merci de mentionner un utilisateur.**`)
      if (!db.get("admins").find({ user_id: id }).value()) {
          db.get("admins").remove({ user_id: id }).write()
          msg.channel.send(`> :thumbsup:  <@${member.id}> à été enlevé de l'administratation du bot.`)
          console.log(` ${member.user.username}  viens d'être enlevé de l'administation par ${msg.author.tag}`.blue)
          const channel = bot.channels.find('name', 'command');
          if (!channel) return;
          channel.send('`' + getNow('time') + '`' + ` :wrench: **${msg.author.tag}** (` + '`' + msg.author.id + '`) a utilisé la commande `' + msg.content + '`' + ` dans **${msg.channel.name}**` )
const log = bot.channels.find('name', '_terminal');
if (!log) return;
log.send('`' + getNow('time') + '`' + ` :warning: **${msg.author.tag}** (` + '`' + msg.author.id + '`)' + ` a enlevé de l'administratation l'ID ` + '`'  + args + '`')
} else {
          msg.channel.send('`' + getNow('time') + '`' + ` :smiling_imp:  La personne ne figure pas dans **l'administratation** !`)
      }
    }
  }

if(msg.content.startsWith(prefix +'help')){
	msg.reply(':e_mail:  Regarde en message privé').then(msg => msg.delete())
	const embed = new Discord.RichEmbed()
	.setAuthor('Bienvenue dans le help du bot blacklist !')
	.setDescription('Les commandes :')
	.addField(prefix + 'bl','pour blacklist une personne')
		.addField(prefix + 'unbl','pour enlever de la blacklist une personne')
			.addField(prefix + 'admin','pour ajouter un admin quand vous etes owner')
				.addField(prefix + 'unadmin','pour derank un admin quand vous etes admin ! ')
				.addField(prefix + 'derank','pour derank un owner quand vous etes le créateur du bot')
					.addField(prefix + 'lb','montrer la liste des bots')
					msg.author.send(embed);

}

});
bot.login(process.env.TOKEN);

