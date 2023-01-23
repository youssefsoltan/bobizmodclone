import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw ' هذا الامر خاص بتحميل الفيديوات والموسيقى بجميع الانواع والملفات*'
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Video 🎥', `${usedPrefix}ytmp4 ${v.url}`, `download: ${v.title} (${v.url})`],
['Videodoc 🎥', `${usedPrefix}ytmp4doc ${v.url}`, `download: ${v.title} (${v.url})`],    
['Audio 🎧', `${usedPrefix}ytmp3 ${v.url}`, `download: ${v.title} (${v.url})`],
['Audiodoc 🎧', `${usedPrefix}ytmp3doc ${v.url}`, `download: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, ' 『 هذا بحثك 』', `هذا ما وجده BOT - AL SOLTAN : ${args.join(" ")}`, 'instagram.com/1y._.o2', '[♦ انقر هنا واختر ما تريد ♦]', listSections, m)
} catch {
try {     
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = 'هذا ما وجده بوبيز : ${args.join(" ")}'
const sections = [{ title: `|－－－－－{ ＡＵＤＩＯ }－－－－－|`, rows: listSerch }, { title: `|－－－－－{ ＶＩＤＥＯ }－－－－－|`, rows: listSerch2 }, { title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ３ }－－|`, rows: listSerch3 }, { title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ４ }－－|`, rows: listSerch4 }]
for (let x of get_result2) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc https://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc https://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: 'تابعني هنا instagram.com/1y._.o2', title: " 『 هذا ما وجده BOT - AL SOLTAN  』", buttonText: "[♦ نتيجة البحث ♦]", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
} catch {    
await m.reply('*وقعت مشكلة المرجو مراسلة instagram.com/1y._.o2*')
}}}
handler.command = /^playlist|playlist2$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
