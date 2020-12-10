const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const path = require('path');

const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "RANDOM",
        reaction: "🎉"
    }
});

client.giveawaysManager = manager;

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Başarıyla Çalışıyor'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.on('guildCreate', guild => {
    client.users.cache.get("762085375464177667").send("J'ai été ajouté au serveur " + guild.name + ". Je suis désormais sur " + client.guilds.cache.size + " serveurs.");
});
  


client.on('message', message => {

  if(message.channel.type === "dm") return;

  const prefixes = require(path.resolve(path.join('.', 'database/prefixes.json')));
  const langues = require(path.resolve(path.join('.', 'database/lang.json')));

  
  if(!langues[message.guild.id]){
    langues[message.guild.id] = {
      langues: 'tr'
    }
  }

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: 'k!'
    }
  }

  fs.writeFile(path.resolve(path.join('.', 'database/prefixes.json')), JSON.stringify(prefixes, null, 2), (err) => {
    if(err) console.log(err)
  });
  fs.writeFile(path.resolve(path.join('.', 'database/lang.json')), JSON.stringify(langues, null, 2), (err) => {
    if(err) console.log(err)
  });

})

client.login('Token')
