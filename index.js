const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

function logger ( msg, change) {
    var author = msg.author;
    //maybe add timestamp but usually the order of messages in console do the trick but the timestamp in s would be nice for a database
    console.log( msg.guild.id +" - " + msg.guild.name + " - " + msg.channel.id + " - " + msg.channel.name 
                + " - " +  author.id + " - " + author.tag + " - " + msg.id + " - " + msg.content + " - "  + change );
}

bot.on("ready", async() => {
    console.log(`----------------`)
    bot.user.setStatus("logging all the chats")
});

bot.on("message", async message => {
    
    if(message.channel.type === "dm" && !message.author.bot){
        return message.reply("I only read the public Messages. Your DMs are save from me.");
    };

    //maybe add timestamp but usually the order of messages in console do the trick but the timestamp in s would be nice for a database

    logger(message, false);
    
});
bot.on('messageUpdate', (oldMessage, newMessage) => {
    
    logger(newMessage, true);
});

bot.login(botconfig.token);