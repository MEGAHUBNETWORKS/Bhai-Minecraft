const mineflayer = require('mineflayer')
const http = require('http')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'mc.mineberry.org',
        username: 'HI8LER',
        version: '1.20.4'
    })

    bot.on('spawn', () => {
        console.log('Joined Lobby...');
        setTimeout(() => {
            bot.chat('/login 03081856255');
            setTimeout(() => {
                bot.chat('s6');
                console.log('Moving to Season 6');
            }, 3000);
        }, 3000);
    });

    bot.on('end', () => setTimeout(createBot, 60000));
    bot.on('error', (err) => console.log(err));
}

createBot();

// REQUIRED for Koyeb to stay online
http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Bot is running!');
}).listen(process.env.PORT || 8080);
