const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');
const Discord = require('discord.js');
var fs = require('fs');
var readline = require('readline');
var cntr = 0;
const talkedRecently = new Set();
let cooldown;
let max;

module.exports = class FollowCommand extends BaseCommand {
	constructor() {
		super('tfollow', 'twitch', []);
	}

	async run(client, message, args, member) {
		if (talkedRecently.has(message.author.id)) {
			message.channel.send(
				'You are currently on cooldown please wait... - ' +
					messsage.author.username
			);
		} else {
			if (isNaN(args[1])) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "The correctly command is: **/tfollow** (**channel**) (**amount**)"
				  }});
            }

			if (message.member.roles.cache.has('828744416915095602')) {
                const (args[1] == 50) });
            }};

			if (message.member.roles.cache.has('828744411738800209')) {
                const (args[1] == 4080) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``4080`` followers with the **Gold** plan"
				  }});
            }};

			if (message.member.roles.cache.has('820442803767083031')) {
                if (args[1] > 2500) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``2500`` followers as a booster."
				  }});
            }};


			if (message.member.roles.cache.has('828744413433298956')) {
                if (args[1] > 1080) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``1080`` followers with the **Bronze** plan"
				  }});
            }};




			if (message.member.roles.cache.has('828744414352244787')) {
                if (args[1] > 6500) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``6500`` followers with the **Emerald** plan"
				  }});
            }};
			




                        if (message.member.roles.cache.has('828744409885310977')) {
                if (args[1] > 9000) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``9000`` followers with the **Diamond** plan"
				  }});
            }};   







                        if (message.member.roles.cache.has('829903567129149500')) {
                if (args[1] > 13500) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``13500`` followers with the **Premium** plan"
				  }});
            }};   






                       if (message.member.roles.cache.has('829903694153252934')) {
                if (args[1] > 18000) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``18000`` followers with the **God** plan"
				  }});
            }};  







                       if (message.member.roles.cache.has('828744415073533973')) {
                if (args[1] > 25000) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``25000`` followers with the **Realm** plan"
				  }});
            }};   







                      if (message.member.roles.cache.has('828744412317745163')) {
                if (args[1] > 3300) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``3300`` followers with the **Silver** plan"
				  }});
            }};  







                     if (message.member.roles.cache.has('828744411034812466')) {
                if (args[1] > 30000) {
				return message.channel.send({embed: {
					color: 16776960,
					description: "You can not use more than ``30000`` followers with the **Legend** plan"
				  }});
            }};







			let id = await fetch(
				`https://api.twitch.tv/helix/users?login=${args[0].toString()}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer awrxthdsaol34wuqzyvwf3c2r3hghg',
						'Client-id': 'kimne78kx3ncx6brgo4mv6wki5h1ko'
					}
				}
			);
			
		    let json = await id.json();
			let sending = new Discord.MessageEmbed()
				.setAuthor(
			   `Adding ${args[1]} Twitch followers!`, 
					json.data[0].profile_image_url,
					`https://www.twitch.tv/${json.data[0].display_name}`
				).setColor('#aaff00')
				.addField('Channel name', json.data[0].display_name)
				.addField('Channel ID', json.data[0].id);
				
			message.channel.send(sending);
			console.log(
				`Adding ${args[1]} follows to ${
					json.data[0].display_name
				} || Executed by: ${message.author.username}`
				
			);
			
			var rl = readline.createInterface({
				input: fs.createReadStream('./all.txt')
			});
			rl.on('line', function(line) {
				if (cntr++ < args[1]) {
					fetch('https://gql.twitch.tv/gql', {
						headers: {
							accept: '*/*',
							'accept-language': 'en-US',
							authorization: `OAuth ${line}`,
							'client-id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
							'content-type': 'text/plain;charset=UTF-8',
							'sec-ch-ua':
								'"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
							'sec-ch-ua-mobile': '?0',
							'sec-fetch-dest': 'empty',
							'sec-fetch-mode': 'cors',
							'sec-fetch-site': 'same-site',
							'x-device-id': 'fkWkLSFgnouOunvs9uZvuJa0xrtCxKom'
						},
						referrer: 'https://www.twitch.tv/',
						referrerPolicy: 'strict-origin-when-cross-origin',
						body: `[{\"operationName\":\"FollowButton_FollowUser\",\"variables\":{\"input\":{\"disableNotifications\":false,\"targetID\":\"${
							json.data[0].id
						}\"}},\"extensions\":{\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"3efee1acda90efdff9fef6e6b4a29213be3ee490781c5b54469717b6131ffdfe\"}}}]`,
						method: 'POST',
						mode: 'cors'
					}).catch(err => console.log(err));
				}
			});
			cntr = 0;
			talkedRecently.add(message.author.id);
			setTimeout(() => {
				talkedRecently.delete(message.author.id);
			}, 60000);
		}
	}
};