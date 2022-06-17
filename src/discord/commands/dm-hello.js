const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('dm-hello')
  .setDescription('Say hello to the user but privately'),
  async execute(interaction) {
    interaction.user.send(`Hello ${interaction.user.username} !`)
    return interaction.reply(`${interaction.user.username} check your DMs !`);
  },
};
