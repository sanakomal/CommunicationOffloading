import mongoose from 'mongoose';

/**
 * TeamNZ Schema
 */

const TeamNZSchema = new mongoose.Schema({
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
export default mongoose.model('TeamNZ', TeamNZSchema);
