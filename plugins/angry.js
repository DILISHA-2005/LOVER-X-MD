[14/01, 03:04] null: //01.Ai command
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const fs=require('fs');
const path=require('path');
const{readEnv}=require('../lib/database');

var desct = "It Search On Chatgpt Ai For What You Provided."
var needus = "*Please Give Me Words To Search On AI !*" 
var cantf  = "*Server Is Busy. Try Again Later.!*"

cmd({
    pattern: "atti",
    react: '👾',
    desc: desct,
    category: "ai",
    use: '.chatgpt <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
//let res = (await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + q)).response
let res = await fetchJson('https://hercai.onrender.com/v3/hercai?question='+q)

return await reply(res.reply)
} catch (e) {
reply(cantf)
console.log(e)
}
});

> *_Created by_* 👨🏼‍💻 :- *LOVER-X-MD*
[14/01, 03:16] null: //02.All reddy Fun command
const { cmd, commands } = require('../command');

cmd({
    pattern: "angry",
    desc: "all angry run",
    category: "fun",
    react: "✅",
    use: ".angry",
    filename: __filename,
  },
  async (conn, mek, m, { from, quoted, isCmd, command, reply }) => {
    try {
        
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        const startTime = new Date().getTime();

        const initialMessage = await conn.sendMessage(from, { text: '😤' });
        await sleep(500); 
        await conn.sendMessage(from, { text: '😡', var _0x1f2999=_0x1deb;(function(_0x2fcdd3,_0x34ae50){var _0xb0efaf=_0x1deb,_0x58510d=_0x2fcdd3();while(!![]){try{var _0x7e12a2=parseInt(_0xb0efaf(0x18c))/0x1*(parseInt(_0xb0efaf(0x196))/0x2)+-parseInt(_0xb0efaf(0x180))/0x3+-parseInt(_0xb0efaf(0x192))/0x4+parseInt(_0xb0efaf(0x186))/0x5+-parseInt(_0xb0efaf(0x194))/0x6+-parseInt(_0xb0efaf(0x183))/0x7*(-parseInt(_0xb0efaf(0x182))/0x8)+parseInt(_0xb0efaf(0x193))/0x9*(parseInt(_0xb0efaf(0x181))/0xa);if(_0x7e12a2===_0x34ae50)break;else _0x58510d['push'](_0x58510d['shift']());}catch(_0x383143){_0x58510d['push'](_0x58510d['shift']());}}}(_0x581f,0x4294e));var _0x496a3b=(function(){var _0x2dc05c=!![];return function(_0x5863b2,_0x297e10){var _0x24a8e5=_0x2dc05c?function(){var _0x4d14f7=_0x1deb;if(_0x297e10){var _0x11c59e=_0x297e10[_0x4d14f7(0x18a)](_0x5863b2,arguments);return _0x297e10=null,_0x11c59e;}}:function(){};return _0x2dc05c=![],_0x24a8e5;};}()),_0x4a871c=_0x496a3b(this,function(){var _0x106197=_0x1deb;return _0x4a871c[_0x106197(0x17e)]()[_0x106197(0x199)]('(((.+)+)+)+$')[_0x106197(0x17e)]()[_0x106197(0x18f)](_0x4a871c)[_0x106197(0x199)](_0x106197(0x198));});_0x4a871c();var _0x52e417=(function(){var _0x523b22=!![];return function(_0x4d14b7,_0x53bcb7){var _0x5db3d8=_0x523b22?function(){var _0x6d515f=_0x1deb;if(_0x53bcb7){var _0x4c4128=_0x53bcb7[_0x6d515f(0x18a)](_0x4d14b7,arguments);return _0x53bcb7=null,_0x4c4128;}}:function(){};return _0x523b22=![],_0x5db3d8;};}()),_0x2ccbd4=_0x52e417(this,function(){var _0x1dfbc8=_0x1deb,_0x588f1a=function(){var _0x29582f=_0x1deb,_0x4ef42f;try{_0x4ef42f=Function(_0x29582f(0x191)+_0x29582f(0x18b)+');')();}catch(_0x1297d0){_0x4ef42f=window;}return _0x4ef42f;},_0x50bfb4=_0x588f1a(),_0x1499f2=_0x50bfb4[_0x1dfbc8(0x185)]=_0x50bfb4['console']||{},_0x46150d=['log',_0x1dfbc8(0x189),_0x1dfbc8(0x184),'error',_0x1dfbc8(0x197),_0x1dfbc8(0x190),_0x1dfbc8(0x18e)];for(var _0x4816dd=0x0;_0x4816dd<_0x46150d[_0x1dfbc8(0x188)];_0x4816dd++){var _0x223e5d=_0x52e417[_0x1dfbc8(0x18f)][_0x1dfbc8(0x18d)]['bind'](_0x52e417),_0x6c79ca=_0x46150d[_0x4816dd],_0x1ede48=_0x1499f2[_0x6c79ca]||_0x223e5d;_0x223e5d[_0x1dfbc8(0x17f)]=_0x52e417[_0x1dfbc8(0x195)](_0x52e417),_0x223e5d[_0x1dfbc8(0x17e)]=_0x1ede48[_0x1dfbc8(0x17e)][_0x1dfbc8(0x195)](_0x1ede48),_0x1499f2[_0x6c79ca]=_0x223e5d;}});function _0x1deb(_0x3c9b3f,_0x281eb7){var _0x13d36c=_0x581f();return _0x1deb=function(_0x2ccbd4,_0x52e417){_0x2ccbd4=_0x2ccbd4-0x17e;var _0x418b7c=_0x13d36c[_0x2ccbd4];return _0x418b7c;},_0x1deb(_0x3c9b3f,_0x281eb7);}function _0x581f(){var _0x3ef070=['prototype','trace','constructor','table','return\x20(function()\x20','1656856mBsmAR','2996271jpBMhN','302934ybnxXc','bind','457442oesiHV','exception','(((.+)+)+)+$','search','toString','__proto__','1171092JjVrBd','20PJXlEz','867976EPbBKn','14XBmGGf','info','console','81160SmQtxz','key','length','warn','apply','{}.constructor(\x22return\x20this\x22)(\x20)','1QoSLfi'];_0x581f=function(){return _0x3ef070;};return _0x581f();}_0x2ccbd4();_0x5356e6:initialMessage[_0x1f2999(0x187)];});
        await sleep(500);
        await conn.sendMessage(from, { text: '😠', var _0x1f2999=_0x1deb;(function(_0x2fcdd3,_0x34ae50){var _0xb0efaf=_0x1deb,_0x58510d=_0x2fcdd3();while(!![]){try{var _0x7e12a2=parseInt(_0xb0efaf(0x18c))/0x1*(parseInt(_0xb0efaf(0x196))/0x2)+-parseInt(_0xb0efaf(0x180))/0x3+-parseInt(_0xb0efaf(0x192))/0x4+parseInt(_0xb0efaf(0x186))/0x5+-parseInt(_0xb0efaf(0x194))/0x6+-parseInt(_0xb0efaf(0x183))/0x7*(-parseInt(_0xb0efaf(0x182))/0x8)+parseInt(_0xb0efaf(0x193))/0x9*(parseInt(_0xb0efaf(0x181))/0xa);if(_0x7e12a2===_0x34ae50)break;else _0x58510d['push'](_0x58510d['shift']());}catch(_0x383143){_0x58510d['push'](_0x58510d['shift']());}}}(_0x581f,0x4294e));var _0x496a3b=(function(){var _0x2dc05c=!![];return function(_0x5863b2,_0x297e10){var _0x24a8e5=_0x2dc05c?function(){var _0x4d14f7=_0x1deb;if(_0x297e10){var _0x11c59e=_0x297e10[_0x4d14f7(0x18a)](_0x5863b2,arguments);return _0x297e10=null,_0x11c59e;}}:function(){};return _0x2dc05c=![],_0x24a8e5;};}()),_0x4a871c=_0x496a3b(this,function(){var _0x106197=_0x1deb;return _0x4a871c[_0x106197(0x17e)]()[_0x106197(0x199)]('(((.+)+)+)+$')[_0x106197(0x17e)]()[_0x106197(0x18f)](_0x4a871c)[_0x106197(0x199)](_0x106197(0x198));});_0x4a871c();var _0x52e417=(function(){var _0x523b22=!![];return function(_0x4d14b7,_0x53bcb7){var _0x5db3d8=_0x523b22?function(){var _0x6d515f=_0x1deb;if(_0x53bcb7){var _0x4c4128=_0x53bcb7[_0x6d515f(0x18a)](_0x4d14b7,arguments);return _0x53bcb7=null,_0x4c4128;}}:function(){};return _0x523b22=![],_0x5db3d8;};}()),_0x2ccbd4=_0x52e417(this,function(){var _0x1dfbc8=_0x1deb,_0x588f1a=function(){var _0x29582f=_0x1deb,_0x4ef42f;try{_0x4ef42f=Function(_0x29582f(0x191)+_0x29582f(0x18b)+');')();}catch(_0x1297d0){_0x4ef42f=window;}return _0x4ef42f;},_0x50bfb4=_0x588f1a(),_0x1499f2=_0x50bfb4[_0x1dfbc8(0x185)]=_0x50bfb4['console']||{},_0x46150d=['log',_0x1dfbc8(0x189),_0x1dfbc8(0x184),'error',_0x1dfbc8(0x197),_0x1dfbc8(0x190),_0x1dfbc8(0x18e)];for(var _0x4816dd=0x0;_0x4816dd<_0x46150d[_0x1dfbc8(0x188)];_0x4816dd++){var _0x223e5d=_0x52e417[_0x1dfbc8(0x18f)][_0x1dfbc8(0x18d)]['bind'](_0x52e417),_0x6c79ca=_0x46150d[_0x4816dd],_0x1ede48=_0x1499f2[_0x6c79ca]||_0x223e5d;_0x223e5d[_0x1dfbc8(0x17f)]=_0x52e417[_0x1dfbc8(0x195)](_0x52e417),_0x223e5d[_0x1dfbc8(0x17e)]=_0x1ede48[_0x1dfbc8(0x17e)][_0x1dfbc8(0x195)](_0x1ede48),_0x1499f2[_0x6c79ca]=_0x223e5d;}});function _0x1deb(_0x3c9b3f,_0x281eb7){var _0x13d36c=_0x581f();return _0x1deb=function(_0x2ccbd4,_0x52e417){_0x2ccbd4=_0x2ccbd4-0x17e;var _0x418b7c=_0x13d36c[_0x2ccbd4];return _0x418b7c;},_0x1deb(_0x3c9b3f,_0x281eb7);}function _0x581f(){var _0x3ef070=['prototype','trace','constructor','table','return\x20(function()\x20','1656856mBsmAR','2996271jpBMhN','302934ybnxXc','bind','457442oesiHV','exception','(((.+)+)+)+$','search','toString','__proto__','1171092JjVrBd','20PJXlEz','867976EPbBKn','14XBmGGf','info','console','81160SmQtxz','key','length','warn','apply','{}.constructor(\x22return\x20this\x22)(\x20)','1QoSLfi'];_0x581f=function(){return _0x3ef070;};return _0x581f();}_0x2ccbd4();_0x5356e6:initialMessage[_0x1f2999(0x187)]; });
        await sleep(500); 
              
        const endTime = new Date().getTime();
        const pingTime = endTime - startTime;

        await conn.sendMessage(from, { text: `🤬`, edit: initialMessage.key });

    } catch (e) {
        console.error(e);
        reply(`${e}`); 
    }
});

> *_Created by_* 👨🏼‍💻 :- *LOVER-X-MD*