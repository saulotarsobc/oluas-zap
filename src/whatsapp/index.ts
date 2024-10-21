import qrcode from "qrcode-terminal";
import { Client, LocalAuth } from "whatsapp-web.js";

const whatsapp = new Client({
  authStrategy: new LocalAuth({
    clientId: "saulo",
    dataPath: "./data",
  }),
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: false,
  },
});

whatsapp.on("ready", () => {
  console.log("Client is ready!");
});

whatsapp.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
});

export default whatsapp;
