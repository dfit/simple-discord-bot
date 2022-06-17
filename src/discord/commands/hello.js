const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('hello')
  .setDescription('Say hello to the user'),
  async execute(interaction) {
    return interaction.reply(`Hello ${interaction.user.username} !`);
  },
};
