import mongoose from 'mongoose';

/**
 * TeamIndia Schema
 */

const TeamIndiaSchema = new mongoose.Schema({
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
export default mongoose.model('TeamIndia', TeamIndiaSchema);
