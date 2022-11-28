const TelegramBot = require('node-telegram-bot-api')
// const axios = require("axios").default;



const TOKEN = process.env.BOT_TOKEN
const bot = new TelegramBot(TOKEN)

console.log('Telegram bot started...')

// const getRandomPhoto = async () => {
//     try {
//         const response = await axios.get('https://picsum.photos/200/300', { responseType: 'arraybuffer' });
//         return response.request.res.responseUrl
//
//     } catch (e) {
//         console.log(e)
//     }
// }
exports.handler = async (event) => {
    console.log(event.body)
    console.log('event', event)
    bot.on('message', msg => {
        const { chat: { id, first_name }, text } = msg

        if (msg.text !== 'photo') {
            console.log(`User ${first_name} wrote ${text}`)
        } else {
            console.log(`User ${first_name} asked for a picture`)
        }
        bot.sendMessage(id, `You wrote ${text}`)
    })


    // bot.onText(/photo/, async function onPhotoText(msg) {
    //     const res = await getRandomPhoto()
    //     await bot.sendPhoto(msg.chat.id, res, {
    //         caption: "Here is a new picture!"
    //     })
    //
    // });
    return { statusCode: 200 };
}
