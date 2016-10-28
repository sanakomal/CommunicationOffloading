import mongoose from 'mongoose';

/**
 * News Schema
 */

const TeamAfghanistanSchema = new mongoose.Schema({
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
export default mongoose.model('TeamAfghanistan', TeamAfghanistanSchema);
