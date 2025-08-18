const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "Techsync-MD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ sᴇssɪᴏɴ ɪs ɴᴏᴡ ᴄᴏɴɴᴇᴄᴛᴇᴅ*\n\n*🛡️ • ᴅᴏɴᴛ sʜᴀʀᴇ ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ*\n\n*🛡️ • ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ ɪs ᴅᴇᴘʟᴏʏᴀʙʟᴇ ᴏɴ ᴛᴀʟᴋʜᴏsᴛᴅʀᴏᴠᴇ & ʜᴇʀᴏᴋᴜ*\n\n*🛡️ • ᴡᴀ.ᴍᴇ : 263717777643*\n\n> *ᴇɴᴊᴏʏ ᴜsɪɴɢ ᴛᴇᴄʜsʏɴᴄ-ᴍᴅ*`; 
                        await Pair_Code_By_Nkosi_Tech.sendMessage(Pair_Code_By_Nkosi_Tech.user.id, { text: Techsync_MD_TEXT }, { quoted: session });

                    await delay(100);
                    await Pair_Code_By_Nkosi_Tech.ws.close();
                    return await removeFile('./temp/' + id);
                } else if (connection === 'close' && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    TECHSYNC_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log('Service restarted');
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: 'Service Currently Unavailable' });
            }
        }
    }
    
    return await Nkosi_PAIR_CODE();
});

module.exports = router;
