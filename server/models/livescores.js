import mongoose from 'mongoose';

/**
 * LiveScores Schema
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
  day: { 
    type: String
  },
  team1:{
    type: String
  },
  team2:{
    type: String
  },
  date:{
    type: Date
  },
  match:{
    type: String
  },
  runs:{
    type: Number
  },
  wickets:{
    type: Number
  },
  overs: {
    type: Number
  },
  cr: {
    type: Number
  },
  player1_runs:{
    type: Number
  },
  player1_ball:{
    type: Number
  },
  player1_name:{
    type: String
  },
  player1_four:{
    type: Number
  },
  player1_six:{
    type: Number
  },
   player2_runs:{
    type: Number
  },
  player2_ball:{
    type: Number
  },
  player2_name:{
    type: String
  },
  player2_four:{
    type: Number
  },
  player2_six:{
    type: Number
  },
  seriesId: {
    type: String
  }
});

export default mongoose.model('LiveScores', LiveScoresSchema);
