const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {
    polling: true
});

const sendMessage = (chatID, message) => {
    return new Promise((resolve, reject) => {
        var res = bot.sendMessage(chatID, message);
        resolve(res);
    });
}

module.exports = sendMessage;