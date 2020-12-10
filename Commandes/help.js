const Discord = require("discord.js");
const path = require('path');

module.exports.run = async(client, message, args) => {

    let langues = require(path.resolve(path.join('.', 'database/lang.json')));
    let langue = langues[message.guild.id].langues;

    if(langue === 'tr'){
        const embed = await message.channel.send(
            new Discord.MessageEmbed()
                .setTitle('Yardım Komutları')
                .setColor('ORANGE')
                .setDescription('<a:ses:783127400606072832> Lütfen 2 Tepkiden Birine Tıklayın \n\n> 📪: DM Den Mesaj Atar! \n> 📝: Bu Kanala Mesaj Atar!')
        )
        await embed.react('📪');
        await embed.react('📝');

        const filter = (reaction, user) => {
            return ['📪', '📝'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
    
        let bool = false;
        let prefixes = require(path.resolve(path.join('.', 'database/prefixes.json')));
        let prefix = prefixes[message.guild.id].prefixes;
        
        client.on('messageReactionAdd', (reaction, user) => {
            if (reaction.emoji.name === '📪' || reaction.emoji.name === '📝' && user.id === message.author.id && user.id != client.user.id) {
    
                if(bool == true){
                    return;
                }
                switch(reaction.emoji.name){
                    case '📪':
                        if(bool === true) return;
                        bool = true;
                        let sended = true;
                        embed.delete();
                        if(langue === 'tr'){
                            message.author.send(
                                new Discord.MessageEmbed()
                                    .setTitle('Yardım Menüsü')
                                    .setColor('BLUE')
                                        .setDescription(`**<a:hype:775971666266161163> İşte mevcut komutların listesi <a:hype:775971666266161163>**\n\n <a:tik1:764496777021620244> \`${prefix}gstart\`: İstenilen süre için bir çekiliş başlatın.\n <a:alarm1:764496795476426793> \`${prefix}reroll\`: İstenen çekilişte yeni bir kazanan bulun.\n <a:dcpartner:778354671622029332> \`${prefix}prefix\`: Sunucunuz için bot prefix değiştirin.\n<a:yan:778238859711479809> \`${prefix}lang\`: Sunucunuzdaki bot dilini değiştirin.\n <a:dance2:764496858708967434> \`${prefix}info\`: Bot hakkında info alırsınız.\n\n <a:nitrooo:769834946842853376> **Not!** \n Bu Komutları Sadece Yöneticiler Yetkisi Olanlar Kullana Bilir.`)
                            ).catch(() => {
                                sended = false;
                                message.channel.send(
                                    new Discord.MessageEmbed()
                                        .setTitle('__HATA__')
                                        .setColor('RED')
                                        .setDescription('Lütfen özel mesajlarınızı herkese açın.')
                                )
                                
                                if(sended === true) {
                                    message.channel.send(
                                        new Discord.MessageEmbed()
                                            .setTitle("Yardım Menüsü")
                                            .setColor('DARK_GREEN')
                                            .setDescription("Size yardım menüsünü özel mesajla gönderdim.")
                                    )
                                }
                            })
                            
                        }
                    case '📝':
                        if(bool === true) return;
                        bool = true;
                        embed.delete();
                        if(langue === 'tr'){
                            message.channel.send(
                                new Discord.MessageEmbed()
                                        .setTitle('Yardım menüsü')
                                        .setColor('BLUE')
                                        .setDescription(`**<a:hype:775971666266161163> İşte mevcut komutların listesi <a:hype:775971666266161163>**\n\n <a:tik1:764496777021620244> \`${prefix}gstart\`: İstenilen süre için bir çekiliş başlatın.\n <a:alarm1:764496795476426793> \`${prefix}reroll\`: İstenen çekilişte yeni bir kazanan bulun.\n <a:dcpartner:778354671622029332> \`${prefix}prefix\`: Sunucunuz için bot prefix değiştirin.\n<a:yan:778238859711479809> \`${prefix}lang\`: Sunucunuzdaki bot dilini değiştirin.\n <a:dance2:764496858708967434> \`${prefix}info\`: Bot hakkında info alırsınız.\n\n <a:nitrooo:769834946842853376> **Not!** \n Bu Komutları Sadece Yöneticiler Yetkisi Olanlar Kullana Bilir.`)
                            )
                        }
                }
    
            }
        })

    } else if(langue === 'en'){
        const embed = await message.channel.send(
            new Discord.MessageEmbed()
                .setTitle('Help System')
                .setColor('ORANGE')
                .setDescription('Please check the reactions based on the code below :\n\n> 📪: ``Get help in dm\'s`` \n> 📝: ``Get help here``')
        )
        await embed.react('📪');
        await embed.react('📝');

        const filter = (reaction, user) => {
            return ['📪', '📝'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
    
        let bool = false;
        let prefixes = require(path.resolve(path.join('.', 'database/prefixes.json')));
        let prefix = prefixes[message.guild.id].prefixes;
        
        client.on('messageReactionAdd', (reaction, user) => {
            if (reaction.emoji.name === '📪' || reaction.emoji.name === '📝' && user.id === message.author.id && user.id != client.user.id) {
    
                if(bool == true){
                    return;
                }
                switch(reaction.emoji.name){
                    case '📪':
                        if(bool === true) return;
                        bool = true;
                        let sended = true;
                        embed.delete();
                        if(langue === 'en'){
                            message.author.send(
                                new Discord.MessageEmbed()
                                    .setTitle('Help System')
                                    .setColor('RED')
                                .setDescription (`**<a:hype:775971666266161163> Here is the list of available commands <a:hype:775971666266161163>** \n \n <a:tik1:764496777021620244> \`${prefix}gstart\`: Requested time Start a raffle for. \n <a:alarm1:764496795476426793> \`${prefix}reroll\`: Find a new winner in the desired draw. \n <a:dance:764496846285701140> \`${prefix}help\`: Sends the help menu. \n <a:dcpartner:778354671622029332> \`${prefix}prefix\`: Change the bot prefix for your server. \n <a:yan:778238859711479809> \`${prefix}lang\`: Bot on your server change language. \n <a:dance2:764496858708967434> \`${prefix}info\`: You will get info about bot. \ n \n <a:nitrooo:769834946842853376> ** Note! ** \n These Commands are Administrators Only Those who have the authority can use it.  `)
                            ).catch(() => {
                                sended = false;
                                message.channel.send(
                                    new Discord.MessageEmbed()
                                        .setTitle('__ERROR__')
                                        .setColor('RED')
                                        .setDescription('Please, open your DMs and retry.')
                                )

                                if(sended === true) {
                                    message.channel.send(
                                        new Discord.MessageEmbed()
                                            .setTitle("Help System")
                                            .setColor('DARK_GREEN')
                                            .setDescription("I sent you the help mesasge in your DMs.")
                                    );
                                }
                            })
                        }
                    case '📝':
                        if(bool === true) return;
                        bool = true;
                        embed.delete();
                        if(langue === 'en'){
                            message.channel.send(
                                new Discord.MessageEmbed()
                                .setTitle('Help System')
                                .setColor('RED')
                                .setDescription (`**<a:hype:775971666266161163> Here is the list of available commands <a:hype:775971666266161163>** \n \n <a:tik1:764496777021620244> \`${prefix}gstart\`: Requested time Start a raffle for. \n <a:alarm1:764496795476426793> \`${prefix}reroll\`: Find a new winner in the desired draw. \n <a:dance:764496846285701140> \`${prefix}help\`: Sends the help menu. \n <a:dcpartner:778354671622029332> \`${prefix}prefix\`: Change the bot prefix for your server. \n <a:yan:778238859711479809> \`${prefix}lang\`: Bot on your server change language. \n <a:dance2:764496858708967434> \`${prefix}info\`: You will get info about bot. \n\n <a:nitrooo:769834946842853376> ** Note! ** \n These Commands are Administrators Only Those who have the authority can use it.  `)
                            )
                        }
                }
  
            }
        })

    }

}
module.exports.help = {
    name: "help"
}