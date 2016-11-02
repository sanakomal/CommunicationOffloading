import mongoose from 'mongoose';

/**
 * TeamAustralia Schema
 */

const TeamAustraliaSchema = new mongoose.Schema({
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
export default mongoose.model('TeamAustralia', TeamAustraliaSchema);
