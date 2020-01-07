const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let nouser = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setTitle('Вы не указали пользователя')
  let nofinduser = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setTitle('Не удалось найти пользователя.')
  let noreason = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setTitle('Введите причину.')
   if(!args[0]) return bot.send(nouser);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.reply(nofinduser);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.reply(noreason);

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("📕Жалоба на", `${rUser} with ID: ${rUser.id}`)
    .addField("📝Жалоба от", `${message.author} with ID: ${message.author.id}`)
    .addField("📢Канал", message.channel)
    .addField("📄Причина", rreason)

    let okaydm = new Discord.RichEmbed()
        .setColor('#800080')
        .setitle(`Совсем скоро администрация нашего сервера, рассмотрит жалобу на ${rUser.user.tag}`)
        message.channel.send(okaydm)
let rpchannel = message.guild.channels.find('name', '⌈📰⌋┊логи')
if(!rpchannel) return message.channel.send("Не удалось найти канал для отчетов");
rpchannel.send(embed)

}

module.exports.help = {
  name: "report",
  aliases: []
}
