import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['528451003894', 'ꪶ𝐀𝐃𝐎𝐋𝐅𝐎ꫂ', true], 
  ['528451003894'], 
  ['528451003894'], 
 ['528451003894'] 
  
] //Numeros de owner 

global.mods = [] // Moderadores
global.prems = ['5492616135602', '528451003894', '527226444010']  // El usuario Premium tiene diamantes ilimitado
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'GuerreroBot-MD'
global.author = '@adolfo._'
global.igfg = '\n▢ Sígueme en Instagram\nhttps://www.instagram.com/AdolfoSSJ' 
global.fgsc = 'https://github.com/ADOLFO-BOT5/GuerreroBot-MD' 
global.fgyt = ''

global.wait = '*👨🏻‍💻Cargando••••*'

global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
