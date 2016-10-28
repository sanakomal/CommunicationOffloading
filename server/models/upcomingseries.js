import mongoose from 'mongoose';

/**
 * News Schema
 */

const UpcomingSeriesSchema = new mongoose.Schema({
   useriesId: {
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
export default mongoose.model('UpcomimgSeries', UpcomingSeriesSchema);
