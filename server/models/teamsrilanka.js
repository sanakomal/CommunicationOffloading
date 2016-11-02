import mongoose from 'mongoose';

/**
 * TeamSrilanka Schema
 */

const TeamSrilankaSchema = new mongoose.Schema({
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
export default mongoose.model('TeamSrilanka', TeamSrilankaSchema);
