/**
 * @author random.cat command.
 * @author Capuccino
 */

/* eslint-env node */

const got = require('got');

exports.commands = [
    'nyaa'
];

exports.nyaa = {
    desc: 'Nyaaa!',
    fullDesc: 'Gets an image from random.cat',
    main(bot, ctx) {
        return new Promise((resolve, reject) => {
            got('http://random.cat/meow').then(res => {
                let kitty = JSON.parse(res.body).file;
                return ctx.createMessage(kitty);
            }).then(resolve).catch(reject);
        });
    }
};