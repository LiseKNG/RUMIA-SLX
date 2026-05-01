import config from "../config.js"

export default async function pingCommand(message, client) {
  const remoteJid = message.key.remoteJid;
  const start = Date.now();

  await client.sendMessage(remoteJid, { text: "_🏓 *𝐏𝐨𝐧𝐠 𝐁𝐘 𝐀𝐊𝐀𝐍𝐄 𝐗𝐎*_" });
  const latency = Date.now() - start;

  await client.sendMessage(remoteJid, {
    text: `_*${config.BotName} latency* : *${latency} ms*_`,
    contextInfo: {
      externalAdReply: {
        title: `${config.BotName} - AKANE XO`,
        body: "AKANE XO - WhatsApp Bot",
        thumbnailUrl: "https://telegra.ph/file/1b8c9e5d9a1f0c3e7b8c4.jpg",
        sourceUrl: "",
      },
      isFowarded: true,
      forwardingScore: 999,
      forwardedNewsletterMessageInfo: {
        newsletterName: '𝐖𝐈𝐍𝐓𝐄𝐑 - 𝐗𝐎 𝐁𝐎𝐓 𝐃𝐞𝐯 237',
        newsletterJid: '120363408815572407@newsletter'
      }
    },
  });
}