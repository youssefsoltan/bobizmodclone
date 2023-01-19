import fetch from 'node-fetch'
import { sizeFormatter } from 'human-readable'
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*[hada ila bghti tilicharji chi haja mn google drive :*\n*◉ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*' 
try {
GDriveDl(args[0]).then(async (res) => {
conn.reply(m.chat, 'att wahd chwia khas ghi lhaja li baghi tilicharjiha matfotch 100mb...\n\n𝐸𝑙 𝑡𝑖𝑒𝑚𝑝𝑜 𝑑𝑒 𝑒𝑠𝑝𝑒𝑟𝑎 𝑝𝑢𝑒𝑑𝑒 𝑣𝑎𝑟𝑖𝑎𝑟 𝑑𝑒𝑝𝑒𝑛𝑑𝑖𝑒𝑛𝑑𝑜 𝑑𝑒𝑙 𝑝𝑒𝑠𝑜 𝑑𝑒𝑙 𝑎𝑟𝑐ℎ𝑖𝑣𝑜, 𝑠𝑖 𝑒𝑙 𝑝𝑒𝑠𝑜 𝑠𝑢𝑝𝑒𝑟𝑎 𝑙𝑜𝑠 100 𝑀𝐵 𝑝𝑢𝑒𝑑𝑒 𝑞𝑢𝑒 𝑠𝑢 𝑎𝑟𝑐ℎ𝑖𝑣𝑜 𝑛𝑜 𝑠𝑒𝑎 𝑒𝑛𝑣𝑖𝑎𝑑𝑜', m)
if (!res) throw res
conn.sendFile(m.chat, res.downloadUrl, res.fileName, '', m, null, { mimetype: res.mimetype, asDocument: true })})
}catch(e){
m.reply('*[hada ila bghti tilicharji chi haja mn google drive exemple gdrive:*\n*◉ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*')
console.log(e)}}
handler.command = /^(gdrive)$/i
export default handler
async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) throw 'ID Not Found'
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'  }})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) throw 'Link Download Limit!'
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')}}
