const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let twarn = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Ты конечно молодец, что нашел секретную команду, но недостаточно прав!')
    if (!message.member.hasPermission("ADMINISTATOR")) return message.reply(twarn)
    let tfwarn = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Укажи текст сообщения!')
    let content = args.slice(0).join(' ')
    let result = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Техническое')
    .setDescription(content)
    .setThumbnail('https://image.flaticon.com/icons/png/512/104/104949.png')
    if (!content) return message.reply(tfwarn)
    await message.delete()
    await message.channel.send(result)
}

module.exports.help = {
    name: 'inf2roles3247'
}
