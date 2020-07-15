const TelegramBot = require("node-telegram-bot-api");
const os = require("os");

const bot = new TelegramBot("1181556184:AAH9tu7kbi7mCNcL6My3PFUx5_9wT76LFh4", { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, bot says hi to ${msg.from.first_name}`);
});
