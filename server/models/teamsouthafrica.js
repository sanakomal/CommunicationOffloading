import mongoose from 'mongoose';

/**
 * TeamSouthAfrica Schema
 */

const TeamSouthAfricaSchema = new mongoose.Schema({
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
export default mongoose.model('TeamSouthAfrica', TeamSouthAfricaSchema);
