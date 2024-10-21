import whatsapp from "./whatsapp";

whatsapp.on("message", (msg: any) => {
  console.log(msg.body);
});

whatsapp.initialize();
