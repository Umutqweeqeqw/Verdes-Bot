const Discord = module.require('discord.js');
const moment = require('moment');
const path = require('path');
var os = require('os');

module.exports.run = async(client, message, args) => {
    
    var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

    var  getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

    usedMemory = (usedMemory/ Math.pow(1024, 3)).toFixed(2);
    totalMemory = (totalMemory/ Math.pow(1024, 3)).toFixed(2);
    

    let langues = require(path.resolve(path.join('.', 'database/lang.json')));
    let langue = langues[message.guild.id].langues;

    if(langue === 'tr'){
        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle("Bot Bilgilerim")
                .setDescription(`İşte Bilgilerim Burda!
                
                <a:ayar:766908107653120028> **__Bot Bilgisi__:** <a:ayar:766908107653120028>
               
                 <a:kraltac:747545830600343682> **Bot Sahibi** <@733176349895819315>
                 <a:yildiz4:741459224659230820> **Sunucular:** ${client.guilds.cache.size}
                 <a:like:733855873163591690> **Kullanıcılar:** ${client.users.cache.size}

                 <a:ayar:766908107653120028> **__Bağlantılar__:** <a:ayar:766908107653120028>
               
                 <a:raptiye:733576671000526898> **Davet Linki** [Tıkla!](https://discord.com/api/oauth2/authorize?client_id=778134193053237259&permissions=8&scope=bot)
                 <a:moderasyone:763726037976481813> **Destek Sunucusu:** [Tıkla!](https://discord.gg/YZXdkJs2XT)
        `)
        );
    } else if(langue === 'en'){
        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle("My Bot Information")
                .setDescription(`Here is my information!
                <a:ayar:766908107653120028> **__Bot informations__:** <a:ayar:766908107653120028>
          
                 <a:kraltac:747545830600343682> **Creator:** <@733176349895819315>
                 <a:yildiz4:741459224659230820> **Guilds:** ${client.guilds.cache.size}
                 <a:like:733855873163591690> **Users:** ${client.users.cache.size}
                
                <a:ayar:766908107653120028>**__Links__:**<a:ayar:766908107653120028>
              
                <a:raptiye:733576671000526898> **Invite:** [Click!](https://discord.com/api/oauth2/authorize?client_id=778134193053237259&permissions=8&scope=bot)
                <a:moderasyone:763726037976481813> **Support Server:** [Click!](https://discord.gg/YZXdkJs2XT)
`)
        );
    }
}

module.exports.help = {
    name: 'info'
}