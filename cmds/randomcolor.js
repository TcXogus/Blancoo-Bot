const Discord = require("discord.js");
const { Canvas } = require("canvas-constructor")

exports.run = async (bot, message, args) => {
let abcb = Math.floor(Math.random() * 16777216).toString(16);

let color = new Canvas(50, 50)
        .setColor(`#${abcb}`)
        .addRect(0, 0, 50, 50)
        .toBuffer();

let attachment = new Discord.Attachment(color, 'color.png');
let embed = new Discord.RichEmbed()
.addField("Цвет: (hex)", abcb)
.setColor(abcb)
.attachFile(attachment)
.setImage('attachment://color.png')
message.channel.send(embed)
}

exports.help = {
    name: "random-color"
}
