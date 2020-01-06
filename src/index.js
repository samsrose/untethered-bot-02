const Discord = require("discord.js");
const bot = new Discord.Client();
// const TOKEN = require('./config/config.js');
bot.login("25tZSu5VsOYe4qXCJEA7zqYUQ2c0F-qw");

bot.on("ready", () => {
  console.info(`${bot.user.tag} has spawned!`);
});

bot.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
    msg.channel.send("pong");
  } else if (msg.content.startsWith("!kick")) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply("Please tag a valid user!");
    }
  }
});
