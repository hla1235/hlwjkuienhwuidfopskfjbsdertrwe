var Discord = require("discord.js");

var client = new Discord.Client();

const config = require("./config.json");

var load = require("./src/load");
load(client, config);

var track = require("./src/track");
track(client, config);

client.login(require("./token.json"))
	.then(() => {
		console.log(`Logged in as ${client.user.tag}`);
	})
	.catch(error => {
		console.error(error);
	});
