
let handler = async (m, { conn, usedPrefix, command }) => {
 let name = conn.getName(m.sender)
 
 let txt = `
Hola amor *${name}* 

Ese comando ya no está disponible
    
Video no disponible xd`
    
     conn.sendHydrated(m.chat, txt, igfg, null, fgsc, 'GitHub', null, null, [
      ['☞ Menu', '/menu'],
      ['☞ Menu 2', '/menu2'],
      ['☞ Grupos', '/gpadolfo']
    ], m)

} 

handler.command = ['serbot', 'jadibot'] 

export default handler
