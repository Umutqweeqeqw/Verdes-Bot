const discord = require('discord.js');
const ms = require('ms');
const path = require('path');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    let langues = require(path.resolve(path.join('.', 'database/lang.json')));
    let langue = langues[message.guild.id].langues;

    if(langue === 'tr'){


        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('__ERROR__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> Bu komutu kullanmak için __YÖNETİCİ__ izinlerine ihtiyacınız var.')
                    .setTimestamp()
            )
        }

        if(!args[0]){
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('Language')
                    .setDescription(`<a:hyr:766903473467162624> **Şuanki Dil ${langues} Değiştirmek İçin k!lang Yazarak Değiştire Bilirsiniz**`)
                    .setTimestamp()
            )
        }

        if(args[0] != 'en' && args[0] != 'tr'){
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('Dil')
                    .setDescription('<a:hyr2:783127400572780564> Lütfen bir dil seçin. İngilizce için EN ve Türçe için TR yazın.')
                    .setDescription()
            )
        }

        langues[message.guild.id] = {
            langues: args[0]
        }

        fs.writeFile(path.resolve(path.join('.', 'database/lang.json')), JSON.stringify(langues, null, 2), (err) => {
            if(err) console.log(err)
        });

        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle('Dil')
                .setDescription(`<a:evt2:783127399369932800> Botun Dili ${args[0]} Olrak Ayarlandı`)
                .setTimestamp()
        )

    } else if(langue === 'en'){

        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('__ERROR__')
                    .setColor('RED')
                  .setDescription ('<a:hyr2:783127400572780564> You need __ ADMINISTRATION permissions to use this command.')                    .setTimestamp()
            )
        }

        if(!args[0]){
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('Language')
                    .setDescription(`<a:hyr2:783127400572780564> The current language is ${langue}. To change it write the same command with paramaters. Put \`en\` for English and \`tr\` for Turkish.`)
                    .setTimestamp()
            )
        }

        if(args[0] != 'en' && args[0] != 'tr'){
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('Language')
                    .setDescription('<a:hyr2:783127400572780564> Please select a language. Put EN for English and TR for Turkish.')
                    .setDescription()
            )
        }

        langues[message.guild.id] = {
            langues: args[0]
        }

        fs.writeFile(path.resolve(path.join('.', 'database/lang.json')), JSON.stringify(langues, null, 2), (err) => {
            if(err) console.log(err)
        });

        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle('Language')
                .setDescription(`<a:evt2:783127399369932800> The new language is ${args[0]}`)
                .setTimestamp()
        )
    }
}

module.exports.help = {
  name: "lang"
}