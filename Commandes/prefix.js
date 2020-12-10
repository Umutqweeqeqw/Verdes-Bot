const discord = require('discord.js');
const ms = require('ms');
const path = require('path');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    let langues = require(path.resolve(path.join('.', 'database/lang.json')));
    let lang = langues[message.guild.id].langues;

    if(lang === 'tr'){

        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('__HATA__')
                    .setColor('RED')
                    .setDescription('<a:hyr2:783127400572780564> Bu komutu kullanmak için __Mesajları Yonet__ izinlerine ihtiyacınız var.')
                    .setTimestamp()
            )
        }

        let prefixes = require(path.resolve(path.join('.', 'database/prefixes.json')));
        if(!args[0]){
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('Prefix')
                    .setDescription('<a:hyr2:783127400572780564> Mevcut prefix ' + prefixes[message.guild.id].prefixes + '')
                    .setTimestamp()
            )
        }

        prefixes[message.guild.id] = {
            prefixes: args[0]
        }

        fs.writeFile(path.resolve(path.join('.', 'database/prefixes.json')), JSON.stringify(prefixes, null, 2), (err) => {
            if(err) console.log(err)
        });

        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle('Prefix')
                .setDescription('<a:evt2:783127399369932800> Yeni prefix ' + prefixes[message.guild.id].prefixes + '')
                .setTimestamp()
        )

    } else if(lang === 'en'){

        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('__ERROR__')
                    .setColor('RED')
                    .setDescription('<a:hyr2:783127400572780564> You need `ADMINISTRATOR` permissions to use that command.')
                    .setTimestamp()
            )
        }

        let prefixes = require(path.resolve(path.join('.', 'database/prefixes.json')));
        if(!args[0]){
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle('Prefix')
                    .setDescription('<a:hyr2:783127400572780564> Tue current prefix is ' + prefixes[message.guild.id].prefixes + '')
                    .setTimestamp()
            )
        }

        prefixes[message.guild.id] = {
            prefixes: args[0]
        }

        fs.writeFile(path.resolve(path.join('.', 'database/prefixes.json')), JSON.stringify(prefixes, null, 2), (err) => {
            if(err) console.log(err)
        });

        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle('Prefix')
                .setDescription('<a:evt2:783127399369932800> The new prefix is ' + prefixes[message.guild.id].prefixes + '')
                .setTimestamp()
        )
    }
}

module.exports.help = {
  name: "prefix"
}