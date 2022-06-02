import util from 'util'
import path from 'path'

let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

let fgac = ["cris ofc", "Wichi"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 
let av = `./src/mp3/${nfg}.mp3`

conn.sendHydrated(m.chat, `Hola crack *${name}* \n \nNecesitas ayudita ctm? \n`, igfg, '', 'https://wa.me/+528451003894', 'WhatsApp', null, null, [
      ['☞ Menu', '/menu'],
      ['☞ Menu 2', '/menu2'],
      ['☞ Grupos', '/gpadolfo']
    ], m)
conn.sendFile(m.chat, av, 'ad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(bot|adolfo)$/i
handler.command = new RegExp
export default handler
