let plusBot = require('node-telegram-bot-api');

let token = '433991323:AAF7fBkNsOdVBajNeMymTfEsb53pAuFW4i0';

let bot = new plusBot(token, {polling : true});

let js_answers =
    [
        'Don`t tell me about JS, you, son of a bitch!',
        'let a = "foo";',
        'Js always make me wanna say: Fuck this shit!, but i can never be sure, what this refets to!',
        'Wet so serious?',
        'Viw, wet?!'
    ];

//repeat after me
bot.onText( /\/start/ , function (msg) {
    bot.sendMessage(msg.from.id, 'Hello!');
});

bot.onText( /[ ,.]js\b/i , function (msg, match) {
    let fromId = msg.from.id;
    let index = Math.floor(Math.random() * js_answers.length);
    let resp = js_answers[index];
    bot.sendMessage(fromId, resp);
});


