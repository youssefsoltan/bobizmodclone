import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*هذا الامز خاص بالترجمة الفورية لكل اللغات يكفي فقط ان تكون تعرف اختصار لكل لغة مثلا اختصار اللغة العربية هو  Ar \n اذن كيف ستترجم  تكتب \n .traslate ar good night \n هذا اذا اردت الترجمة للعربية  ونفس العملية لباقي اللغات `
if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'ar'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {      
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
await m.reply('*هذه هي ترجمتك:* ' + result.text)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await m.reply('هذه هي ترجمة:* ' + result2)
} catch { 
await m.reply('*هناك مشكلة اعد المحاولة لاحقا*')    
}}}
handler.command = /^(translate|tr||trjamlia|traducir|trad)$/i
export default handler
