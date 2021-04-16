const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('help', 'h', 'H', []);
  }

  async run(client, message, args) {
    message.channel.send({embed: {
      color: 16776960,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      url: "",
      fields: [{
          name: "Send twitch followers to an account.",
          value: "``/tfollow (Channel Name) (Ammount)``"
        },
        

      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "quixZz"
      }
    }
  });
  }
}