import mongoose from 'mongoose';

/**
 * News Schema
 */

const LiveScoresSchema = new mongoose.Schema({
  series_name: {
    type: String
  },
  stadium: {
    type: String
  },
  date: {
    type: Date
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
   fn: {
    type: String
  },
  livescoresId: {
    type: String
  }
});

/**
 * @typedef User
 */
export default mongoose.model('LiveScores', LiveScoresSchema);
//livescores