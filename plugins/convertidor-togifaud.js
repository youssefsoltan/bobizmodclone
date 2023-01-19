/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `تحويل فيديو الى صورة متحركة GIF 
مثال :  ترسل للبوت الفيديو الذي تريد تحويله لصورة متحركة ثم تشير اليه وتكتب  \n *.togifaud*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype ||''
if (!/(mp4)/.test(mime)) throw `تحويل فيديو الى صورة متحركة GIF 
مثال :  ترسل للبوت الفيديو الذي تريد تحويله لصورة متحركة ثم تشير اليه وتكتب  \n *.togifaud*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption:'ʙᴏʙɪᴢ ʙᴏᴛ By Noureddine ouafy*' }, { quoted: m })}
handler.command = ['togifaud']
export default handler

