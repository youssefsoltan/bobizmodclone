let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*لقد غادرنا هذا الولد من المجموعة رافقته السلامة*')
} else throw `* غادرنا هذا الولد من المجموعة رافقته السلامة, 𝚄𝚂𝙴:*\n*- @user (mención)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
