import mongoose from 'mongoose';

/**
 * TeamScotland Schema
 */

const TeamScotlandSchema = new mongoose.Schema({
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
export default mongoose.model('TeamScotland', TeamScotlandSchema);
