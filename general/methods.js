const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **BOTNET-PANEL** 🚀')
  .setDescription("**FIREWALL** \n `CFB`  `CF-UAM`  `CF-TLS` \n **LAYER 7** \n  `CFSockets`  `BYPASS`  `TLS-STRONG` \n **LAYER 4** \n `TCP-KILL` \n `OVH` \n `SAMP` \n `rezky100gbps` \n **TOOLS** \n `geoip` \n numberlookup **Free new methods **")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['methods'],
  permLevel: 0
}

exports.help = {
  name: 'methods',
  description: 'RezkyBotnet',
  usage: 'methods'
}
