const Discord = require('discord.js');
const ms = require('ms');
const path = require('path');

module.exports.run = async (client, message, args) => {

    let langues = require(path.resolve(path.join('.', 'database/lang.json')));
    let lang = langues[message.guild.id].langues;


    let hasPerm = message.member.hasPermission('MANAGE_MESSAGES');
    let hasRole = message.member.roles.cache.find(r => r.name === 'Giveaways');

    if (lang === 'tr') {

        if (hasPerm === false || !hasRole == null) return message.channel.send(
            new Discord.MessageEmbed()
                .setTitle('__HATA__')
                .setColor('RED')
                .setDescription('<a:hyr2:783127400572780564> Bu Komutu Kullanmak İçin __Mesajları Yönet__ Yetkisine Sahip OLmaklısın!')
                .setTimestamp()
        )

        if (!args[0]) {
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__HATA__')
                    .setColor('RED')
                    .setDescription('<a:hyr2:783127400572780564> Reroll Yapmak İçin Çekiliş MEsajının ID Sini Seçmelisin!')
                    .setTimestamp()
            )
        }

        client.giveawaysManager.reroll(args[0], {
            messages: {
                congrat: "<a:evt2:78312739936 9932800> Reroll Çektiğiniz İçin Yeni Kazanan Kullanıcı : {winners} Tebrikeler",
            }
        })
    } else if(lang === 'en'){
        if(hasPerm === false || !hasRole == null) return message.channel.send(
            new Discord.MessageEmbed()
                .setTitle('__ERREUR__')
                .setColor('RED')
                .setDescription('To Use This Command, You Must Have Manage Messages Permission!')
                .setTimestamp()
        )

        if(!args[0]) {
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERROR__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> Please, enter the giveaway ID')
                    .setTimestamp()
            )
        }

        client.giveawaysManager.reroll(args[0], {
            messages: {
                congrat: "<a:evt2:783127399369932800> Congratulations You Won the Lottery: {winners}",
            }
        })
    }

}

module.exports.help = {
    name: "reroll"
}