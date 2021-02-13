const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "p/"
const fetch = require('node-fetch');
const randomPuppy = require("random-puppy");
const fs= require('fs')
const { CanvasSenpai } = require("canvas-senpai");
const { error } = require("console");
const canva = new CanvasSenpai();
const api = require('covidapi')
const db = require('quick.db')
const ms = require('parse-ms')

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);


Client.commands.set(command.name, comad);
}
Client.commands = new Discord.Collection();
/////PRESENCIAAAAAA/////
function presence() {
    Client.user.setPresence({
        status: "idle",
        activity: {
            name: `p/help | v.1.1.0 | Sono in ${Client.guilds.cache.size} server :)`,
            type: "WATCHING"
        }
    })
}
//////ACTIVITY////////
Client.on("ready", () => {
    console.log("Bot is online.");
    presence();
});
/////////messagessss////////
Client.on('message', async message => {
    let args = message.content.substring(prefix.length).split(" ")
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "bot")) {
        message.channel.send("**__📌Check DM📌__**")
        message.author.send({
            embed: {
                color: "RANDOM",
                description: ":incoming_envelope:**__L'invito del bot__**:incoming_envelope:\nhttps://discord.com/api/oauth2/authorize?client_id=735198022593413130&permissions=8&scope=bot\n**__Invito per il server Discord di supporto Boost Livello1__**\nhttps://discord.gg/VKMxMqUw6s",
                Image: "https://cdn.discordapp.com/attachments/726350613889417317/808368592055435274/ba-ka.gif"
            }
        })
    }
    if (message.content.startsWith(prefix + "aiuto")) {
        message.channel.send("Check DM");
        message.author.send("Bella questo è il mio aiuto xD")
    }
    if(message.content.startsWith(`${prefix}help`)){
            message.channel.send({
                embed: {
                    title: "My commands",
                    color: "RANDOM",
                    description: "`•p/cmdit:` **per ricevere aiuto in Italiano**\n`•p/cmdesp`: **para recibir ayuda en Español**\n`•p/cmding`: **For receive help in English**\n**|---------------------------|**\n`Music help`\n**•p/help**",
                    image: "https://tenor.com/view/mai-sakurajima-bunny-girl-senpai-anime-selfie-gif-17571525"
                }
            })
        }
    if(message.content.startsWith(`${prefix}av`)){
        let miembro = message.mentions.users.first()
if (!miembro) {
    const embed = new Discord.MessageEmbed()
        .setImage(`${message.author.displayAvatarURL()}`)
        .setColor("RANDOM")
        .setFooter(`Avatar di ${message.author.tag}`);
    message.channel.send(embed);

} else {
    const embed = new Discord.MessageEmbed()
        .setImage(`${miembro.displayAvatarURL()}`)
        .setColor("RANDOM")
        .setFooter(`Avatar di ${miembro.tag}`);

    message.channel.send(embed);

};
}
if(message.content.startsWith(`${prefix}ping`)){
    let ping = Math.floor(message.client.ws.ping);
message.channel.send(":ping_pong: Pong!, "+ ping + "ms");
}
if(message.content.startsWith(`${prefix}infosv`)){
    var server = message.guild;
  
    const embed = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/793861656261689355/808687958025699408/tenor_1.gif')
    .setAuthor(server.name, server.iconURL())
    .addField('**ID**', server.id, true)
    .addField('**Regione**', server.region, true)
    .addField('**Creato il**', server.joinedAt.toDateString(), true)
    .addField('**Owner del server**', server.owner.user.tag, true)
    .addField('**Membri**', server.memberCount, true)
    .setColor("**RANDOM**")
    
message.channel.send(embed);
}
if(message.content.startsWith(`${prefix}Mai`)){
    message.channel.send({embed: {
        color: "RANDOM",
        description: "San.",
        thumbnail: "https://cdn.discordapp.com/attachments/793861656261689355/808687958025699408/tenor_1.gif"
      }
  });
  
}
if(message.content.startsWith(`${prefix}changemm`)){
    let text = args.slice(1).join(" ")
    if(!text) return message.channel.send(`Change your mind about waht?`)
    const loading = message.channel.send(`Fetching Image...`)

    fetch(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`)
    .then(res => res.json())
    .then(data => {
        loading



        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Change My Mind`)
            .setImage(data.message)
            .setURL(data.message)
            .setTimestamp()
            .setFooter(`Click the blue text if you cant see the image.`)

        message.channel.send(embed)
        message.delete(loading)
    })
}
if(message.content.startsWith(`${prefix}say`)){
    var text = message.content.split(" ").slice(1).join(' ')
    if (!text) return message.channel.send('Cosa devo dire?')
    message.channel.send(text)
    message.delete()
}
if (message.content.startsWith(`${prefix}embed`)) {
    var embed = message.content.split(" ").slice(1).join(' ')
    if (!embed) return message.channel.send('Cosa devo scrivere sul embed?')
    let embedsay = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(embed)


    message.channel.send(embedsay)
    message.delete()
}
if (message.content === "p/meme") {
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const image = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(image)
        .setTitle(`Your meme sir. From r/${random}`)
        .setTimestamp()
        .setFooter('Click the blue text if you cant see the image.')
        .setURL(`https://reddit.com/r/${random}`);
        message.channel.send(embed)
}
if (message.content === "p/cat") {
    const subReddits = ["cat", "cats"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`Your cat sir. From r/${random}`)
    .setTimestamp()
    .setURL(`https://reddit.com/r/${random}`);
    message.channel.send(embed)
}
if (message.content === "p/dog") {
    const subReddits = ["dog", "dogs"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const imgs = await randomPuppy(random);
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(imgs)
    .setTitle(`Your dog sir. From r/${random}`)
    .setTimestamp()
    .setURL(`https://reddit.com/r/${random}`);
    message.channel.send(embed)
}
if (message.content === "p/maisan") {
    const subReddits = ["ChurchofMaiSakurajima", "bunnygirlsenpai"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const Images = await randomPuppy(random);
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(Images)
    .setTitle(`💙${random}`)
    .setTimestamp()
    .setURL(`https://reddit.com/r/ChurchofMaiSakurajima/${random}`);
    message.channel.send(embed)
}
if (message.content.startsWith(prefix + "cmdit")) {
    message.channel.send("**__📍Check DM📍__**")
    message.author.send({
        embed: {
            color: "RANDOM",
            description: "**-|---------------------------------|-**\n`🔨Comandi di Moderazione🔨`\n•**p/ban**: per bannare un utente\n•**p/kick**: per kickare un utente\n•**p/mute**: per mutare un membro\n•**p/purge**: per cancellare dei messaggi\n**•p/warn:** per warnare un membro\n**-|---------------------------------|-**\n`📢 Comandi Divertenti📢`\n•**p/aiuto**: ...?\n•**p/avatar**: per avere l'avatar di un membro\n**•p/infosv:** per l'informazioni del server\n**•p/ping:** per vedere il tuo ping\n**•p/meme:** per vedere meme\n**•p/dog:** per vedere i cani\n**•p/cat:** per vedere i gatti\n**•p/changemm:** change my mind :)**\n-|---------------------------------|-**\n`🔞Commandi NSFW🔞`\n•**p/porn**: mostra contenuto nsfw\n**-|---------------------------------|-**\n`🗣️Altri Comandi🗣️`\n•**p/say + il contenuto del messaggio**: il bot manda il vostro messaggio in anonimo\n•**p/embed + il contenuto del messaggio**:il bot manda il vostro messaggio in forma anonima ma in style embed\n**-|---------------------------------|-**\n `Music Commands`\n**•p/play**\n**•p/lyrics**\n**•p/pause**\n**•p/stop**\n**•p/shuffle**\n**•p/queue**\n**•p/remove**\n**•p/search**\n**•p/scsearch**\n**•p/skip**\n**-|---------------------------------|-**\n`🦠COVID-19 Commands🦠`\n**•p/covid all**\n**•p/covid + Nome del paese in inglese**",
            title: ":flag_it:**__Informazioni sui miei comandi__**:flag_it:"
            }
    })
}
if (message.content.startsWith(prefix + "cmdesp")) {
    message.channel.send("**__📍Check DM📍__**")
    message.author.send({
        embed: {
            color: "RANDOM",
            description: "**-|---------------------------------|-**\n`🔨Comandos de Moderacion🔨`\n•**p/ban**: para banear a un usuario\n•**p/kick**: para expulsar a un usuario\n•**p/mute**: para mutear a un usuario\n•**p/purge**: para elminiar mensajes\n**•p/warn:** para warnear a un usuario\n**-|---------------------------------|-**\n`📢 Comandi Divertenti📢`\n•**p/aiuto**: ...?\n•**p/avatar**: para ver el avatar de un miembro\n**•p/infosv:** para ver la informacion del servidor**•p/ping:** para ver tu ping\n**•p/meme:** te muestra memes\n**•p/dog:** te muestra perros\n**•p/cat:** te muestra gatos\n**•p/changemm:** change my mind :)**\n-|---------------------------------|-**\n`🔞Commandi NSFW🔞`\n•**p/porn**: muestra contenido nsfw\n**-|---------------------------------|-**\n`🗣️Altri Comandi🗣️`\n•**p/say + il contenuto del messaggio**: el bot manda vuestro mensaje en anonimo\n•**p/embed + il contenuto del messaggio**:el bot manda vuestro mensaje en anonimo in forma de embed\n**-|---------------------------------|-**\n `Music Commands`\n**•p/play**\n**•p/lyrics**\n**•p/pause**\n**•p/stop**\n**•p/shuffle**\n**•p/queue**\n**•p/remove**\n**•p/search**\n**•p/scsearch**\n**•p/skip**\n**-|---------------------------------|-**\n`🦠COVID-19 Commands🦠`\n**•p/covid all**\n**•p/covid + Nombre del pais en Ingles**",
            title: "**__:flag_es:Informaciones sobre mis comandos:flag_es:__**",
            image: "https://tenor.com/view/mai-sakurajima-bunny-girl-senpai-anime-selfie-gif-17571525"
        }
    })
}
if (message.content.startsWith(`${prefix}rip`)) {
    const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png')

    message.channel.send(attachment);
}
if(message.content === "p/covid all") {
    const data = await api.all()
    const coronaembed = new Discord.MessageEmbed()
    .setTitle("**__🦠GLOBAL COVID-19 CASES🦠__**")
    .setColor("RANDOM")
    .addField("**Total COVID-19 Active**", data.active, true)
    .addField("**Total COVID-19 Cases Today**", data.todayCases, true)
    .addField("**Total COVID-19 Critical Cases**", data.critical, true)
    .addField("**Total COVID-19 Cases**", data.cases, true)
    .addField("**Total COVID-19 Deaths**", data.deaths, true)
    .addField("**Total COVID-19 Recovered**", data.recovered, true)
    .setTimestamp()
    message.channel.send(coronaembed)
}
    if(message.content.startsWith("p/covid")){
        const countrycovid = message.content.slice(prefix.length).split(' ')
        const countrydata = await api.countries({country: countrycovid})
        const countryembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`**__${countrycovid[1]} Cases__**`)
    .setDescription("Number of cases may differ form other sources")
    .addField("**Cases**", countrydata.cases, true)
    .addField("**Active**", countrydata.active, true)
    .addField("**Cases Today**", countrydata.todayCases, true)
    .addField("**Critical Cases**", countrydata.critical, true)
    .addField("**Deaths**", countrydata.deaths, true)
    .addField("**Recovered**", countrydata.recovered, true)
    message.channel.send(countryembed)
    }
///////////////kicks////////////
if (message.content.startsWith(`${prefix}kick`)) {
    var perms = message.member.hasPermission("KICK_MEMBERS")
    if(!perms) return message.channel.send("You haven't permissions.")
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);

        if (member) {
            member
            .kick('Optional reason that will display  in the audit logs')
            .then(() => {
                message.reply(`Successfully kicked${user.tag}.`);
            })
            .catch(err => {
                message.reply('I was unable to kick the member');
                console.error(err);
            });
        } else {
            message.reply("That user isn't in tihs guild!");
        }
    } else {
        message.reply("You didn't mention the user to kick!");
    }
}
//////////ban////////////
if (message.content.startsWith(`${prefix}ban`)) {
    var perms = message.member.hasPermission("BAN_MEMBERS")
    if(!perms) return message.channel.send("You haven't permissions.")
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
            member
            .ban({
                reason: 'They were bad!'
            })
            .then(() => {
                message.reply(`Successfully banned ${user.tag}.`);
            })
            .catch(err => {
                message.reply('I was unable to ban the member!')
                console.error(err);
            })
        } else {
            message.reply("That user isn't in this guild!");
        }
    } else {
        message.reply("You didn't mention the user to ban!");
    }
}
if (message.content.startsWith(`${prefix}addrole()`)) {let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');
    
    let role = message.guild.roles.cache.find(r => r.name === nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES");
    
    if(!perms) return message.channel.send("Non hai i permessi necessari per aggiungere i ruoli.");
    if(!miembro) return message.reply('Devi menzionare un membro.');
    if(!nombrerol) return message.channel.send('Scrivi il ruolo da aggiungere.');
    if(!role) return message.channel.send('Ruolo non trovato nel server.');
    
    miembro.roles.add(role).catch(console.error);
    message.channel.send(`il ruolo **${role.name}** è stato aggiungto a  **${miembro.user.username}**.`);
    }
if (message.content.startsWith(`${prefix}removerole()`)) {
    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');

let role = message.guild.roles.cache.find(r => r.name === nombrerol);
let perms = message.member.hasPermission("MANAGE_ROLES");

if(!perms) return message.channel.send("Non hai i permessi necessari per rimouovere i ruoli.");
if(!miembro) return message.reply('Devi menzionare un membro.');
if(!nombrerol) return message.channel.send('Scrivi il ruolo da rimuovere.');
if(!role) return message.channel.send('Ruolo non trovato nel server.');

miembro.roles.remove(role).catch(console.error);
message.channel.send(`Il ruolo **${role.name}** è stato rimosso a **${miembro.user.username}**.`);
}
if(message.content.startsWith("p/bal")) {
    let user = message.mentions.users.first() || message.author
    let money = db.fetch(`money_${user.id}`)

    if(money === null) money = 0

    message.channel.send(`${user} you have ${money} coins.`)
}
let timeout = 86400000
let amount = 500
if(message.content === "p/daily") {
    let daily = await db.fetch(`daily_${message.author.id}`);
    if(daily != null && timeout - (Date.now() -daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        message.channel.send(`You alredy collect your daily reward, tou can come back in **${time.hours} ${time.minutes}m ${time.seconds}s**`)


    } else {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Daily`, message.author.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`**Daily Rewards**`)
        .addField(`Collected`, amount)
        message.channel.send(embed)

        db.add(`money_${message.author.id}`, amount)
        db.add(`daily_${message.author.id}`, Date.now())
    }
} 
if(message.content === "p/work") {
    let timeoutworked = 3600000
    let worked = await db.fetch(`worked_${message.author.id}`)

    if(worked != null && timeoutworked - (Date.now() -worked) > 0) {
        let time = ms(timeoutworked - (Date.now() - worked));
        message.channel.send(`You have alredy worked please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
     } else {
         let amountearned = Math.floor(Math.random() * 3000) +1

         let jobs = ["Developer", "Scientist", "Teacher", "Football Player", "Model", "Actor", "Doctor", "Shopkeeper"]
         let job = jobs[Math.floor(Math.random() * jobs.length)]

         let embed = new Discord.MessageEmbed()

         .setAuthor(`${message.author.tag}, it payed off`, message.author.displayAvatarURL())
         .setDescription(`${message.author}, you worked a ${job} and earn ${amountearned} coins.`)

         message.channel.send(embed)

         db.add(`money_${message.author.id}`, amountearned)
         db.add(`worked_${message.author.id}`, Date.now())
     } 
}
if(message.content === "p/inventory") {
    let items = db.get(message.author.id)
    let user = message.author
    if(items != null) items = "This user has nothing"

    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s Inventory`)
    .setColor("RANDOM")
    .setDescription("Inventory", items)
    message.channel.send(embed)
} 
/////////////mute/////////
if(message.content === "p/mute") {

}
//////prova////
Client.on("messageDelete", async (message) => {
    let canal = client.channels.cache.get('809889688306974730'); 
    message.channel.send(`**${message.author.username}** ha cancellato questo messaggio: ${message}`);
   
});
////////OTHER///////
Client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '『👋🏻』•benvenuti');
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://cdn.discordapp.com/attachments/735201487059157043/809350571160371200/maisannn.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `Hey **${member.user.username}**, benvenuto nel mio server!`,
      attachment
    ); 
});
})
Client.login("NzM1MTk4MDIyNTkzNDEzMTMw.Xxcwgw.RFN5A8Jbhcd4oQ19utI2CNaxUQ4");