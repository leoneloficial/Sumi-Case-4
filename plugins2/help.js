const fs = require("fs");
const path = require("path");

const handler = async (msg, { conn }) => {
  try {
    const rawID = conn.user?.id || "";
    const subbotID = rawID.split(":")[0] + "@s.whatsapp.net";

    const prefixPath = path.resolve("prefixes.json");
    const menuConfigPath = path.resolve("setmenu.json");

    let prefixes = {};
    if (fs.existsSync(prefixPath)) {
      prefixes = JSON.parse(fs.readFileSync(prefixPath, "utf-8"));
    }

    const usedPrefix = prefixes[subbotID] || ".";

    await conn.sendMessage(msg.key.remoteJid, {
      react: { text: "💜", key: msg.key }
    });

    let customData = {};
    if (fs.existsSync(menuConfigPath)) {
      customData = JSON.parse(fs.readFileSync(menuConfigPath, "utf8"));
    }

    const personal = customData[subbotID];
    const imageBuffer = personal?.imagen ? Buffer.from(personal.imagen, "base64") : null;
    const nombreMenu = personal?.nombre || "CORTANA 2.0 Subbot";

    let caption = "";
    let footer = "";

    if (personal) {
  // MENÚ PERSONALIZADO DISEÑO BONITO
  caption = `

 > Hola! soy *${nombreMenu}*
╭┈ ↷
│❀ Modo » PUBLICO
│✦ Bot »  SUB BOT 
│✰ Usuarios » 3600
│✧ Comandos » 120
│❍ Channel » https://whatsapp.com/channel/0029Vagdmfv1SWt5nfdR4z3w
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ: 
   
➳ *#menu  #help*
> ﹣para ver los comandos del Bot..

➳ *#serbot #code*
> ﹣para ser Sub-Bot..
───────────────────────────────╯

*•°•°•°•°•°•°• ★ Configuración ★ •°•°•°•°•°•°•*
> Comandos Para Configurar El Bot O El Sub-Bot..

➳ *#setmenu*
> ﹣personaliza tu Sub-Bot.. 

➳ *#delmenu*
> ﹣quita lo personalizado..

➳ *#setprefix*
> ﹣cambiar prefijo del Bot..

➳ *#creador #owner*
> ﹣contacto del creador.. 

➳ *#get*
> ﹣descargar los estados..

➳ *#ping*
> ﹣medir latencia del Bot..

➳ *#addgrupo*
> ﹣autorizar grupo para que lo usen..

➳ *#delgrupo*
> ﹣elimina grupo autorizado para que no lo usen..

➳ *#addlista*
> ﹣autorizar usuario para que use en privado..

➳ *#dellista*
> ﹣quitar usuario autorizado para que no lo use en privado..
───────────────────────────────╯

*•°•°•°•°•°•°• ★ Descargas ★ •°•°•°•°•°•°•*
> *Comandos De Descargas Para Descargar Archivos De Las Apps..*

➳ *#playaudio #play*
> ﹣descargar una canción de YouTube como audio o documento..

➳ *#instagram #ig*
> ﹣descargar videos de Instagram..

➳ *#tiktok #tk #tt*
> ﹣descargar videos de Tiktok..

➳ *#facebook #fb*
> ﹣descargar videos de Facebook..

➳ *#apk*
> ﹣descargar una aplicación.. 

➳ *#whatmusic*
> ﹣identifica la canción de un audio o vídeo..

➳ *#ytmp3 #ytmp4 #youtube*
> ﹣para descargar canciones de YouTube..
───────────────────────────────╯


*•°•°•°•°•°•°• ~ ★ Grupos ★ ~ •°•°•°•°•°•°•*
> *Comandos Para Los Grupos..*

➳ *#abrirgrupo #open*
> ﹣comando para abrir el grupo..

➳ *#cerrargrupo #close*
> ﹣comando para cerrar el grupo..

➳ *#damelink*
> ﹣comando para que el Bot mande el link del grupo..

➳ *#kick*
> ﹣comando para sacar a un miembro del grupo..

➳ *#modoadmins on/off*
> ﹣comando para que solo los administradores usen el Bot..

➳ *#antilink on/off*
> ﹣comando para sacar el miembro que mandé Link por el grupo..

➳ *#welcome on/off*
> ﹣comando para dar bienvenida y despida en el grupo..

➳ *#todos #tag #invocar #tagall*
> ﹣comando para etiquetar y invocar todos los miembros del grupo..

➳ *#tts + (texto)*
> ﹣repite lo que dice en el texto con un audio..
───────────────────────────────╯

*•°•°•°•°•°•°• ~ ★ Stickers ★ ~ •°•°•°•°•°•°•*
> *Comandos Para Crear Stickers..*

➳ *#s #sticker*
> ﹣hacer sticker de video o foto..

➳ *#ver*
> ﹣enviar fotos que son de ver de una sola vez.. 

➳ *#hd*
> ﹣subir la calidad a las imágenes..

➳ *#toimg*
> ﹣hacer que un sticker sea una imagen..

➳ *#perfil + (mención)*
> ﹣ver la foto de perfil de un usuario..
───────────────────────────────╯

*•°•°•°•°•°•°• ~ ★ Anime ★ ~ •°•°•°•°•°•°•*
> *Comandos Para Reacciones De Anime..*

➳ *#kiss*
> ﹣besar a alguien..

➳ *#slap*
> ﹣pegarle a alguien..
───────────────────────────────╯

*•°•°•°•°•°•°• ~ ★ Juegos ★ ~ •°•°•°•°•°•°•*
> *Comandos De Juegos Para Divertirse En Grupos..*

➳ *#verdad o #reto*
> ﹣juega a verdad o reto..

➳ *#topkiss*
> ﹣usuarios besados o que besaron..

➳ *#topslap*
> ﹣usuarios más golpeados o que golpearon..

➳ *#meme #memes*
> ﹣el Bot envía memes..
───────────────────────────────╯

*•°•°•°•°•°•°• ~ ★ Ai ★ ~ •°•°•°•°•°•°•*
> *Comandos De Inteligencia Artificial..*

➳ *#chatgpt*
> ﹣preguntale cosas a Chatgpt..

➳ *#geminis*
> ﹣preguntale a Géminis.. 
───────────────────────────────╯
`.trim();
    } else {
      // MENÚ POR DEFECTO NORMALITO
      caption = `
╔⌬${nombreMenu}⌬╗
║   Menú por categorías  
╚═─────────────═╝

〔 👇Haz Que Tus Amigos Sean *SUBBOTS* También Diles Que Envíen Estos Comandos👇 〕
⚘ ${usedPrefix}serbot / qr
⚘ ${usedPrefix}code / codigo 
⚘ ${usedPrefix}sercode / codigo

〔 AI & Respuestas 〕
⚘ ${usedPrefix}chatgpt
⚘ ${usedPrefix}geminis

〔 Descargas 〕
⚘ ${usedPrefix}play / ${usedPrefix}playdoc
⚘ ${usedPrefix}play2 / ${usedPrefix}play2doc
⚘ ${usedPrefix}play5 ${usedPrefix}play6
⚘ ${usedPrefix}ytmp3 / ${usedPrefix}ytmp3doc
⚘ ${usedPrefix}ytmp35
⚘ ${usedPrefix}ytmp4 / ${usedPrefix}ytmp4doc
⚘ ${usedPrefix}ytmp45
⚘ ${usedPrefix}apk
⚘ ${usedPrefix}instagram / ${usedPrefix}ig
⚘ ${usedPrefix}tiktok / ${usedPrefix}tt
⚘ ${usedPrefix}facebook / ${usedPrefix}fb

〔 Stickers & Multimedia 〕
⚘ ${usedPrefix}s
⚘ ${usedPrefix}ver
⚘ ${usedPrefix}toaudio 
⚘ ${usedPrefix}hd
⚘ ${usedPrefix}toimg
⚘ ${usedPrefix}whatmusic
⚘ ${usedPrefix}tts
⚘ ${usedPrefix}perfil

〔 Grupos 〕
⚘ ${usedPrefix}abrirgrupo
⚘ ${usedPrefix}cerrargrupo
⚘ ${usedPrefix}infogrupo
⚘ ${usedPrefix}kick
⚘ ${usedPrefix}modoadmins on o off
⚘ ${usedPrefix}antilink on o off
⚘ ${usedPrefix}welcome on o off
⚘ ${usedPrefix}tag
⚘ ${usedPrefix}tagall / ${usedPrefix}invocar / ${usedPrefix}todos
⚘ ${usedPrefix}infogrupo
⚘ ${usedPrefix}damelink
⚘ ${usedPrefix}antidelete on o off

〔 Comandos De Juegos 〕
⚘ ${usedPrefix}verdad
⚘ ${usedPrefix}reto
⚘ ${usedPrefix}memes o meme
⚘ ${usedPrefix}kiss
⚘ ${usedPrefix}topkiss
⚘ ${usedPrefix}slap
⚘ ${usedPrefix}topslap

〔 Configuración & Dueño 〕
⚘ ${usedPrefix}antideletepri on o off
⚘ ${usedPrefix}setprefix ↷ 
   Cambiar prefijo del subbot
⚘ ${usedPrefix}creador ↷ 
    Contacto del creador
⚘ ${usedPrefix}get ↷ 
    Descargar estados
⚘ ${usedPrefix}addgrupo ↷ 
    Autorizar grupo pa que lo usen.
⚘ ${usedPrefix}addlista ↷
   Autorizar usuario privado pa lo usen.
⚘ ${usedPrefix}dellista ↷
   Quitar usuario autorizado pa que no lo usen.
⚘ ${usedPrefix}delgrupo ↷ 
   Eliminar grupo autorizado pa que no lo usen.
⚘ ${usedPrefix}ping ↷ 
   Medir latencia del bot
⚘ ${usedPrefix}setmenu↷
  personaliza tu subbot
⚘ ${usedPrefix}delmenu↷
   quita lo personalizado

═⌬ CORTANA 2.0 Subbot ⌬═`.trim();
    }

    await conn.sendMessage(
      msg.key.remoteJid,
      {
        image: imageBuffer ? imageBuffer : { url: `https://cdn.russellxz.click/a9403f01.jpeg` },
        caption,
      },
      { quoted: msg }
    );

    await conn.sendMessage(msg.key.remoteJid, {
      react: { text: "✅", key: msg.key }
    });

  } catch (err) {
    console.error("❌ Error en el menú:", err);
    await conn.sendMessage(msg.key.remoteJid, {
      text: "❌ Ocurrió un error mostrando el menú.",
      quoted: msg
    });
  }
};

handler.command = ['menu', 'help', 'ayuda', 'comandos'];
module.exports = handler;