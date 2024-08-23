export const SPOTTED_COMMAND = {
  name: 'spotted',
  description: 'Spotted someone? Count it and tag them!',
  options: [
    {
      name: 'who',
      type: 3,
      description: 'Who did you spot?',
      required: true,
    },
  ],
};

export const SPOT_LEADERBOARD = {
  name: 'leaderboard',
  description:
    'Leaderboard stats totals for everyone participating in Turbo Spotting.',
  type: 1,
};
