import mongoose from 'mongoose';

/**
 * News Schema
 */

const NewsSchema = new mongoose.Schema({
  author: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  link: {
    type: String
  },
  pubDate: {
    type: Date
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  newsId: {
    type: String
  }
});

/**
 * @typedef User
 */
export default mongoose.model('News', NewsSchema);
