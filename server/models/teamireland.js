import mongoose from 'mongoose';

/**
 * TeamIreland Schema
 */

const TeamIrelandSchema = new mongoose.Schema({
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
export default mongoose.model('TeamIreland', TeamIrelandSchema);
