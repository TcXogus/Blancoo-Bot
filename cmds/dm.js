const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(twarn)
    let twarn = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Недостаточно прав!')
    let dmmember = message.mentions.users.first()
    let dmmessage = args.slice(1).join(' ')
    let dmresult = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle(':bell: Новое уведомление!')
        .setDescription(`${dmmessage}`)
    dmmember.send(dmresult)
    message.delete()
};
module.exports.help = {
    name: "dm"
}
