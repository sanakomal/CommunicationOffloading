import mongoose from 'mongoose';

/**
 * News Schema
 */

const TeamUAESchema = new mongoose.Schema({
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
export default mongoose.model('TeamUAE', TeamUAESchema);