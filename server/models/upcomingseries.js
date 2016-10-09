import mongoose from 'mongoose';

/**
 * News Schema
 */

const NewsSchema = new mongoose.Schema({
   useriesId: {
    type: String
  },
  SeriesName: {
    type: String
  },
  s_Startdate: {
    type: Date,
  },
   s_endate: {
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
export default mongoose.model('UpcomimgSeries', NewsSchema);
