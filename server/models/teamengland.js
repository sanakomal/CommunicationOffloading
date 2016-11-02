import mongoose from 'mongoose';

/**
 * TeamEngland Schema
 */

const TeamEnglandSchema = new mongoose.Schema({
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
export default mongoose.model('TeamEngland', TeamEnglandSchema);
