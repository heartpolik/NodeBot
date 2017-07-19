let plusBot = require('node-telegram-bot-api');

let token = '433991323:AAF7fBkNsOdVBajNeMymTfEsb53pAuFW4i0';

let bot = new plusBot(token, {polling : true});

let js_answers =
    [
        'Don`t tell me about JS, you, son of a bitch!',
        'let a = "foo"'
    ];

//repaet after me
bot.onText('/\/start/', function (msg) {
    bot.sendMessage(msg.from.id, 'Hello!');
});

bot.onText( /[ ,.]js\b/i , function (msg, match) {
    var fromId = msg.from.id;
    var index = math.floor(math.random(js_answers.length));
    var resp = js_answers[index];
    bot.sendMessage(fromId, resp);
});

// bot.onText(/(.+)js(.+)/, function (msg) {
//     let fromId = msg.from.id;
//     let resp = '';
//     bot.sendMessage(fromId, resp);
// });

