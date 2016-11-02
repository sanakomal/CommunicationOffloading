import mongoose from 'mongoose';

/**
 * TeamWestIndies Schema
 */

const TeamWestIndiesSchema = new mongoose.Schema({
   TeamId: {
    type: String
  },
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  }
});

/**
 * @typedef User
 */
export default mongoose.model('TeamWestIndies', TeamWestIndiesSchema);
