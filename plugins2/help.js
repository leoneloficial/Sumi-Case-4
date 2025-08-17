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
      react: { text: "📜", key: msg.key }
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
╭─❍ 𓂃 𝑺𝒖𝒃𝒃𝒐𝒕 𝑷𝒆𝒓𝒔𝒐𝒏𝒂𝒍𝒊𝒛𝒂𝒅𝒐 ❍─╮
│   𝙈𝙚𝙣𝙪́: *${nombreMenu}*

✐; *✿*→ ᴘᴀʀᴀ ᴄʀᴇᴀʀ ᴜɴ sᴜʙ-ʙᴏᴛ ᴄᴏɴ ᴛᴜ ɴᴜᴍᴇʀᴏ ᴜᴛɪʟɪᴢᴀ *#qr* o *#code*
#✎ ${usedPrefix}serbot / qr
#✎ ${usedPrefix}code / codigo 
#✎ ${usedPrefix}sercode / codigo
> esto es para que te hagas Sub bot 

➮   *IA PUEDES RESPUESTA*

#✎ ${usedPrefix}chatgpt
#✎ ${usedPrefix}geminis
> ᥫ᭡con la ia puedes buscar lo que quieras puede servir para los estudios 

➮    *DESCARGAS*

#✎ ${usedPrefix}play / ${usedPrefix}playdoc
#✎ ${usedPrefix}play2 / ${usedPrefix}play2doc
#✎ ${usedPrefix}play5
#✎ ${usedPrefix}play6
#✎ ${usedPrefix}ytmp3 / ${usedPrefix}ytmp3doc
#✎ ${usedPrefix}ytmp35
#✎ ${usedPrefix}ytmp4 / ${usedPrefix}ytmp4doc
#✎ ${usedPrefix}ytmp45
#✎ ${usedPrefix}apk
#✎ ${usedPrefix}instagram / ${usedPrefix}ig
#✎ ${usedPrefix}tiktok / ${usedPrefix}tt
#✎ ${usedPrefix}facebook / ${usedPrefix}fb
> ᥫ᭡con esto puedes descargar lo que gustes con el enlace o sin el enlace 

➮   *sticker y mas*

#✎ ${usedPrefix}s
#✎ ${usedPrefix}ver
#✎ ${usedPrefix}toaudio 
#✎ ${usedPrefix}hd
#✎ ${usedPrefix}toimg
#✎ ${usedPrefix}whatmusic
#✎ ${usedPrefix}tts
#✎ ${usedPrefix}perfil
> ᥫ᭡puedes hacer stickers y mejorar imágenes o saber que música buscas etc. 

➮   *GRUPO*

#✎ ${usedPrefix}abrirgrupo
#✎ ${usedPrefix}cerrargrupo
#✎ ${usedPrefix}infogrupo
#✎ ${usedPrefix}kick
#✎ ${usedPrefix}modoadmins on o off
#✎ ${usedPrefix}antilink on o off
#✎ ${usedPrefix}welcome on o off
#✎ ${usedPrefix}tag
#✎ ${usedPrefix}tagall / ${usedPrefix}invocar / ${usedPrefix}todos
#✎ ${usedPrefix}infogrupo
#✎ ${usedPrefix}damelink
> ᥫ᭡puedes configurar el. bot en los grupos

➮   *COMANDO Y JUEGOS*

#✎ ${usedPrefix}verdad
#✎ ${usedPrefix}reto
#✎ ${usedPrefix}memes o meme
> ᥫ᭡comandos de juegos 

➮ *CONFIGURACIÓN OWENER*

#✎ ${usedPrefix}setprefix ↷
  Cambiar prefijo del subbot
#✎ ${usedPrefix}creador ↷
  Contacto del creador
#✎ ${usedPrefix}get ↷
  Descargar estados
#✎ ${usedPrefix}addgrupo ↷
  Autorizar grupo pa que lo usen.
#✎ ${usedPrefix}addlista ↷
  Autorizar usuario privado pa lo usen.
#✎ ${usedPrefix}dellista ↷
  Quitar usuario autorizado pa que o lo usen.
#✎ ${usedPrefix}delgrupo ↷
  Eliminar grupo autorizado pa que no lo usen.
#✎ ${usedPrefix}pong ↷
  Medir latencia del bot
> ᥫ᭡aquí sólo puede ser el creador o personas de colaboración
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