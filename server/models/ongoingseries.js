import mongoose from 'mongoose';

/**
 * OngoingSeries Schema
 */

const OngoingSeriesSchema = new mongoose.Schema({
   SeriesId: {
    type: String
  },
  SeriesName: {
    type: String
  },
  SeriesStartDate: {
    type: Date,
  },
   SeriesEndDate: {
    type: Date,
  },
  MatchNo: {
    type: String
  },
   team1: {
    type: String
  },
   team2: {
    type: String
  },
  Venue: {
    type: String
  },
  StartDate: {
    type: Date
  },
   EndDate: {
    type: Date
  },
});

/**
 * @typedef User
 */
export default mongoose.model('OngoingSeries', OngoingSeriesSchema);
