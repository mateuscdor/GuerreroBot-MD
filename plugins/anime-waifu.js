import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '⚠ Error!'
    conn.sendButton(m.chat, '🔥 Aquí tienes pajin', igfg, json.url, [['🔄Siguiente🔄', `${usedPrefix + command }`]], m)
}
handler.help = ['waifu']
handler.tags = ['nime']
handler.command = ['waifu'] 
handler.limit = true



export default handler
