// commands/menu.js
import config from "../config.js"

export default async function menuCommand(message, client) {
  try {
    const remoteJid = message.key.remoteJid;

    // --- Texte du menu ---
    const menuText = `
    ╭─💖────────────💖╮
╭╯                                                          ╭╯
◯╴▹  `𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐒𝐘𝐒𝐓𝐄𝐌𝐄 𝐌𝐄𝐍𝐔`      ◯
╰╮                                                          ╰╮
    ╰─💖────────────💖╯
◉╮
╰╮
    ╰═▶︎  𝐁𝐘 💗𝐀𝐊𝐀𝐍𝐄 - 𝐗𝐎💗 ─▢
╭────────────────◯
┠▶︎🌸ping - test de latence 
┠▶︎🌸hello - dire bonjour à akane 
┠▶︎🌸sticker - crée un sticker
┠▶︎🌸play - jouer un audio musical 
┠▶︎🌸menu - afficher le menu du bot
╰────────────────◯
> ${config.nameCreator}`;

    // --- Envoyer l'image ---
    await client.sendMessage(remoteJid, {
      image: { url: "https://files.catbox.moe/9sj9bw.jpg" }, // link for image
      caption: menuText
    });

    // --- Envoyer l'audio depuis un lien ---
    const audioUrl = "https://files.catbox.moe/ncurds.mp3"; // link for audio
    const ptt = true ; // true = PTT / false = audio normal

    await client.sendMessage(remoteJid, {
      audio: { url: audioUrl },
      mimetype: "audio/mp3",
      ptt: ptt
    });

  } catch (err) {
    console.error("Erreur dans menuCommand:", err);
  }
}