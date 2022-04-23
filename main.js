const Discord = require("discord.js")
const client = new Discord.Client({ intents: 32767 });

client.on("ready", () => {
    console.log("bot is online and straight VIBING")
})

client.on("messageCreate", (message) => {
    if (message.content === "hey") {
        message.channel.send("Cameron is so cool and awesome you should buy all his products although it is 100% not worth it...")
    }
})

client.login("put your bot token here")