const discord = require("discord.js");
const webhook = require("webhook-discord");
module.exports.run = async (bot, message, args) => {
const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/684008202635051052/kjFunNILxRPZ42b0-U-LPtww681g5wBirgq0PnpTYIWemmR9EMRTRslCFPH5fdpDpzXv"); // Прямая ссылка на вЕбхук
 
const msg = new webhook.MessageBuilder()
                .setName("Я крутой") // Название вебхука, если нету то по дефолту стоит
                .setText("Класс") // Текст вне embed текста, или внутри, я не помню.
                .setTime();
 
Hook.send(msg);} // Отправить вебхук
module.exports.help = {
   name: "webhook"
}