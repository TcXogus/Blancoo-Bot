const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
        Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    }
    let res = ['и промахнулся...','и попал в него!'].random()
    let us = message.mentions.users.first()
    let bus = message.author
    message.delete().catch();
            let yourmamkaschoose =
    ['Вы умерли!', 'Вы умерли!', 'Вы выжили!'].random()

    let result = new Discord.RichEmbed()
    .setColor('#fff000')
    .setTitle('Русская рулетка')
    .addField('Вы выстрелили в себя и...',`${yourmamkaschoose}`)
    .setThumbnail('https://cdn.pixabay.com/photo/2017/01/31/23/09/gun-2028034_960_720.png')
    if(us === bus) return message.reply(result)
    let lalla = new Discord.RichEmbed()
     .setColor('#00ffff')
     .setDescription(`${bus} выстрелил в ${us} ${res}`)
     .setThumbnail('https://cdn.pixabay.com/photo/2017/01/31/23/09/gun-2028034_960_720.png')
    if(!us) return message.reply(' пожайлуста, укажите пользователя')
    message.channel.send(lalla)
}
exports.help = {
    name: "shoot"
}
