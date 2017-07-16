let plusBot = require('node-telegram-bot-api');

let token = '433991323:AAF7fBkNsOdVBajNeMymTfEsb53pAuFW4i0';

let bot = new plusBot(token, {polling : true});

//repaet after me

bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

bot.onText(/(.+)js(.+)/, function (msg) {
    let fromId = msg.from.id;
    let resp = 'Don`t tell me about JS, you, son of a bitch!';
    bot.sendMessage(fromId, resp);
});

