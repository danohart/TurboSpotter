import { Schema } from 'mongoose';

export const Spotter = new Schema({
  userId: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  totalSpotted: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    defualt: 0,
  },
});
