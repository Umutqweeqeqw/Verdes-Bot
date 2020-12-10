const Discord = require('discord.js');
const ms = require('ms');
const path = require('path');

module.exports.run = async (client, message, args) => {

    let langues = require(path.resolve(path.join('.', 'database/lang.json')));
    let lang = langues[message.guild.id].langues;

    
    let hasPerm = message.member.hasPermission('MANAGE_MESSAGES');
    let hasRole = message.member.roles.cache.find(r => r.name === 'Giveaways');

    if(lang === 'tr'){

        if(hasPerm === false || !hasRole == null) {
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__HATA__')
                    .setColor('RED')
                  .setDescription('<a:hyr:766903473467162624> Hey! Bu Komutu Kullanmak İçin __NESAJLARI YÖNET__ Yetkisine Sahip Olman Gerkiyor.')
                    .setTimestamp()
            )
        }

        if(!args[0]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__HATA__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> Hatalı Kullanım Kullanım Şekilleri \n 1m(1 Dakika) | 1h(Saat) | 1d(Gün)')
                    .setTimestamp()
            )
        }

        if(!args[1]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__HATA__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> Lütfen kazanan sayısını girin.')
                    .setTimestamp()
            )
        }

        if(!args[2]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__HATA__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> Lütfen kazanılacak ödülü girin.')
                    .setTimestamp()
            )
        }

        message.delete();

        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1]),
            messages: {
                giveaway: "<a:tadaa:778351596576702485> **ÇEKİLİŞ** <a:tadaa:778351596576702485>",
                giveawayEnded: "<a:tadaa:778351596576702485> **ÇEKİLİŞ BİTTİ** <a:tadaa:778351596576702485>",
                timeRemaining: `\n süre: **{duration}**!\nÇekilişi Yapan Yetkili: ${message.author}\n Kazanan Kişiler: ${parseInt(args[1])}`,
                inviteToParticipate: "Çekilişe Katılmak Tepkiye Tıkla!",
                winMessage: "Tebrikler {winners}! **{prize}** Ödülünü Kazandın!",
                embedFooter: "Çekiliş",
                noWinner: `Olamaz! Yeterli katılım olmadığı için hediye iptal edildi.\n Çekilişi Yapan Yetkili: ${message.author}`,
                winners: `Kazanan Kişiler : `,
                endedAt: "Bitiş",
                units: {
                    seconds: "Saniye",
                    minutes: "Dakika",
                    hours: "Saat",
                    days: "Gün",
                    pluralS: false
                }
            }
        });


        client.giveawaysManager.on('giveawayRerolled', (giveaway, winners) => {
            winners.forEach((member) => {
                member.send('Yeniden: Tebrikler, '+member.user.username+', '+giveaway.prize+ ' Kazandın' );
            });
        });

        return;
    } else if(lang === 'en') {
        if(hasPerm === false || !hasRole == null) {
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERROR__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> You need `MANAGE_MESSAGES` permissions or a role named `giveaway` to use that command.')
                    .setTimestamp()
            )
        }

        if(!args[0]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERROR__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> Please enter a giveaway duration.\n\n__Example__ : `1[s/m/h/d]`')
                    .setTimestamp()
            )
        }

        if(!args[1]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERROR__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> Please, enter the number of winners.')
                    .setTimestamp()
            )
        }

        if(!args[2]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERROR__')
                    .setColor('RED')
                    .setDescription('<a:hyr:766903473467162624> Please, enter the giveaway gift.')
                    .setTimestamp()
            )
        }

        message.delete();

        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1]),
            messages: {
                giveaway: "<a:tadaa:778351596576702485> **GIVEAWAY** <a:tadaa:778351596576702485>",
                giveawayEnded: " **GIVEAWAY ENDED** ",
                timeRemaining: `\nTime left: **{duration}**!\nHosted by: ${message.author}\nWinner(s): ${parseInt(args[1])}`,
                inviteToParticipate: "Click Reaction to Enter the Lottery!",
                winMessage: "Congratulations, {winners}! You won **{prize}**!",
                embedFooter: "Giveaways",
                noWinner: `Can't be! The gift was canceled due to insufficient participation. \n Drawer: ${message.author}`,
                winners: `Winners:`,
                endedAt: "End at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        });


        client.giveawaysManager.on('giveawayRerolled', (giveaway, winners) => {
            winners.forEach((member) => {
                member.send('**Reroll:** Congratulation, '+member.user.username+', you won: '+giveaway.prize);
            });
        });

        return;
    }

    
}

module.exports.help = {
  name: "gstart"
}