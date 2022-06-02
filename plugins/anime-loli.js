
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	let img = (await axios.get(`https://raw.githubusercontent.com/ADOLFO-BOT5/team-fg/main/img/loli.json`)).data
  
await conn.sendButton(m.chat, '🔥Aquí tienes pajin', 'Click en siguiente para ir a la siguiente imagen', pickRandom(img), [['🔄SIGUIENTE🔄', `${usedPrefix + command}`]],m)
}
handler.help = ['loli']
handler.tags = ['nime']
handler.command = ['loli']
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
