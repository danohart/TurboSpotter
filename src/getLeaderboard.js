export default async function getLeaderboard(interaction, env) {
  try {
    // Gather all keys from the KV namespace to create a leaderboard
    const keys = await env.SPOTTED_COUNT.list();

    if (!keys.keys.length) {
      // If no keys are found, return an appropriate message
      return 'No sightings recorded yet.';
    }

    const leaderboard = [];

    // Fetch the count for each key and build the leaderboard
    for (const key of keys.keys) {
      const count = parseInt(await env.SPOTTED_COUNT.get(key.name), 10);

      // Ensure count is a valid number before adding to the leaderboard
      if (!isNaN(count)) {
        leaderboard.push({
          userId: key.name.replace('spotted_count_', ''),
          count,
        });
      }
    }

    // Sort the leaderboard by count, descending
    leaderboard.sort((a, b) => b.count - a.count);

    // Create a formatted leaderboard string
    const leaderboardString = leaderboard
      .slice(0, 10) // Show top 10 users
      .map(
        (entry, index) =>
          `${index + 1}. <@${entry.userId}> - ${entry.count} sightings`,
      )
      .join('\n');

    // Return the leaderboard
    return `**Leaderboard:**\n${leaderboardString}`;
  } catch (error) {
    console.error('Error generating leaderboard:', error);
    return 'Error generating leaderboard.';
  }
}
