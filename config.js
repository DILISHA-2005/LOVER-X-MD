const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "pG9lEShY#b6tzGlP2xptfQEidH8F3CMZqzmovMDW7fGH5-TYbH9U",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/dD9q5Wm/46c9a5400387bdbe.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "┏━━━━━━━━━━━➤◍◉➤\n│ *🔰𝐇𝐞𝐲 𝐈'𝐦 ᒪOᐯEᖇ-X-ᗰᗪ ᗷOT 𝐁𝐨𝐭⚡*\n┗━━━━━━━━━━━━━━━━━━━━\n━➤◍◉➤\n┏━━━━━━━━━━━➤◍◉➤\n│ *🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰❤️*\n┗━━━━━━━━━━\n━➤◍◉➤\n┏━━━━━━━━━━━➤◍◉➤\n│ *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ᒪOᐯEᖇ-X-ᗰᗪ ᗷOT 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲|*\n┗━━━━━━━━━━━━━━━━━━━━\n*2024🤍*\n\n┏━━━━━━━━━━━➤◍◉➤\n*This bot is made by LOVER-X-MD technology.This is made with using Ai.You can use this bot easily.New updates will coming*\n┗━━━━━━━━━━━━━━━━━━━━\n\n🔰❤️ *join with us.....* 🔰❤️\n",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94771098429",
OWNER_REACT: process.env.OWNER_REACT || "👻",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
BOT_NAME: process.env.BOT_NAME || "➺ᒪOᐯEᖇ-X-ᗰᗪ ᗷOT",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
ANTI_LINK:process.env.ANTI_LINK || "true",
ANTI_BAD:process.env.ANTI_BAD || "true",
ANTI_BOT:process.env.ANTI_BOT || " true"
};