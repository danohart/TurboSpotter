export default async function updateUserScore(interaction, env) {
  try {
    const userId = interaction.member.user.id;
    const key = `spotted_count_${userId}`;

    // Fetch the current count from KV, default to '0' if not found
    const currentCount = (await env.SPOTTED_COUNT.get(key)) || '0';

    // Parse the count and increment
    const newCount = parseInt(currentCount, 10) + 1;

    // Store the updated count back in KV
    await env.SPOTTED_COUNT.put(key, newCount.toString());

    // Return a message with the updated count
    return `Looks like <@${interaction.member.user.id}> spotted ${interaction.data.options[0].value}. That's a total of ${newCount}`;
  } catch (error) {
    console.error('Error updating user score:', error);
    return 'Error updating score.';
  }
}

// data {
//     app_permissions: '2248473465835073',
//     application_id: '1272719868805910608',
//     authorizing_integration_owners: { '0': '1210655186108817479' },
//     channel: {
//       flags: 0,
//       guild_id: '1210655186108817479',
//       id: '1210655187086082120',
//       last_message_id: '1275905413316870175',
//       name: 'general',
//       nsfw: false,
//       parent_id: '1210655187086082118',
//       permissions: '2251799813685247',
//       position: 1,
//       rate_limit_per_user: 0,
//       topic: null,
//       type: 0
//     },
//     channel_id: '1210655187086082120',
//     context: 0,
//     data: {
//       id: '1273036469799223407',
//       name: 'spotted',
//       options: [ [Object] ],
//       resolved: { members: [Object], users: [Object] },
//       type: 1
//     },
//     entitlement_sku_ids: [],
//     entitlements: [],
//     guild: { features: [], id: '1210655186108817479', locale: 'en-US' },
//     guild_id: '1210655186108817479',
//     guild_locale: 'en-US',
//     id: '1275906307500675102',
//     locale: 'en-US',
//     member: {
//       avatar: null,
//       banner: null,
//       communication_disabled_until: null,
//       deaf: false,
//       flags: 0,
//       joined_at: '2024-02-23T18:31:29.317000+00:00',
//       mute: false,
//       nick: null,
//       pending: false,
//       permissions: '2251799813685247',
//       premium_since: null,
//       roles: [ '1210655962449580103' ],
//       unusual_dm_activity_until: null,
//       user: {
//         avatar: '7d7f663f835b732e42e664d0a8ea14cd',
//         avatar_decoration_data: null,
//         clan: null,
//         discriminator: '0',
//         global_name: 'danielhart',
//         id: '595292764976185345',
//         public_flags: 0,
//         username: 'danielhart'
//       }
//     },
//     token: 'aW50ZXJhY3Rpb246MTI3NTkwNjMwNzUwMDY3NTEwMjplWFNQQXBHOVkwSTNVMWxXbzV1REI1cjg1cXJVYzFyaUtSUXRmaVpUNDZRS2FhQWFMRURDdTBSYTBxRjNXQUpkbm9IckxwSUtrRW1VME9iMUFrRXdBeGRLeGxxT25ZTEJxaGFoQkRqcmUzY3FOb1YwQ3g3Q1BxR2J5dmtTOG1Reg',
//     type: 2,
//     version: 1
//   }
