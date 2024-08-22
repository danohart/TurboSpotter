export default async function updateUserScore(interaction, env) {
  const mainUser = `<@${interaction.member.user.id}>`;
  const spottedUser = interaction.data.options[0].value;
  const phrases = [
    `Looks like ${mainUser} spotted ${spottedUser}. That's a total of ${newCount} sightings so far.`,
    `Hey! ${mainUser} has spotted ${spottedUser} again. Bringing your total to ${newCount}!`,
    `Nice one, ${mainUser}! You've spotted ${spottedUser}. That makes ${newCount} sightings now.`,
    `Spotted! ${mainUser} has spotted ${spottedUser}. Total sightings: ${newCount}.`,
    `Great job, ${mainUser}! You've added another spot, seeing ${spottedUser}. That makes ${newCount} sightings in total.`,
  ];

  try {
    const userId = interaction.member.user.id;
    const key = `spotted_count_${userId}`;

    // Fetch the current count from KV, default to '0' if not found
    const currentCount = (await env.SPOTTED_COUNT.get(key)) || '0';

    // Parse the count and increment
    const newCount = parseInt(currentCount, 10) + 1;

    // Store the updated count back in KV
    await env.SPOTTED_COUNT.put(key, newCount.toString());

    // Randomly select a phrase
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    // Return the randomly selected phrase
    return randomPhrase;
  } catch (error) {
    console.error('Error updating user score:', error);
    return 'Error updating score.';
  }
}
