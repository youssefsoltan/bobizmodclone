import { youtubeSearch } from  @bochilteam/scraper 

let handler = async (m, { conn, args, usedPrefix, command, text }) => {

if (!text) throw `*هذا الامر لتحميل فيديوهات اليوتوب على شكل موسيقىو او فيديو او ملف يعني على شكل \n video / mp3 / audio/ document`

try {

const { video } = await youtubeSearch(text)

const listSections = []

let teks = [...video ].map(v => {

switch (v.type) {

case  video : {

listSections.push([`${v.title}`, [

[ Video 🎥 , `${usedPrefix}ytmp4 ${v.url}`, `تحميل: ${v.title} (${v.url})`],

[ Videodoc 🎥 , `${usedPrefix}ytmp4doc ${v.url}`, `تحميل: ${v.title} (${v.url})`],    

[ Audio 🎧 , `${usedPrefix}ytmp3 ${v.url}`, `تحميل: ${v.title} (${v.url})`],

[ Audiodoc 🎧 , `${usedPrefix}ytmp3doc ${v.url}`, `تحميل: ${v.title} (${v.url})`]

]])

}}}).filter(v => v).join( \n\n========================\n\n )

conn.sendList(m.chat,   『 https://instagram.com/noureddine_ouafy 』 , `البحث عن : ${args.join(" ")}`,  ♥ ,  [♦ نتائج البحث اختر ما تريده  ♦] , listSections, m)

} catch {

await m.reply( *[❗error❗] هناك مشكلة في البوت المرجو الاعادة لاحقا او التواصل مع صاحب البوت \n instagram.com/noureddine_ouafy* )

}}

handler.command = /^playlist|playlist2$/i

export default handler

