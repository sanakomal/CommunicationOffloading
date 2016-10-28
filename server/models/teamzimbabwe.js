import mongoose from 'mongoose';

/**
 * News Schema
 */

const TeamZimbabweSchema = new mongoose.Schema({
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
export default mongoose.model('TeamZimbabwe', TeamZimbabweSchema);