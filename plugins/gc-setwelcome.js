let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗]  مرحبا بك بوبيز بوت يرحب بك في المجموعة لا تنسى متابعة مطور البوت instagram.com/noureddine_ouafy*')
} else throw `*[❗] مرحبا بك في مجموعتنا تابع صاحب البوت instagram.com/noureddine_ouafy, 𝚄𝚂𝙴:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
