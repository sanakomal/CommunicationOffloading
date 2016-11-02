import mongoose from 'mongoose';

/**
 * TeamPakistan Schema
 */

const TeamPakistanSchema = new mongoose.Schema({
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
export default mongoose.model('TeamPakistan', TeamPakistanSchema);
