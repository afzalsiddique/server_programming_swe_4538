const mongoose = require("mongoose");
const PCSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  institutionName: {
    type: String,
    required: true,
  },
  coachName: {
    type: String,
    required: true,
  },
  coachContact: {
    type: String,
    required: true,
  },
  coachEmail: {
    type: String,
    required: true,
  },
  leaderName: {
    type: String,
    required: true,
  },
  leaderContact: {
    type: String,
    required: true,
  },
  leaderEmail: {
    type: String,
    required: true,
  },
  leadertshirt: {
    type: String,
    required: true,
  },
  member1Name: {
    type: String,
    required: true,
  },
  member1Contact: {
    type: String,
    required: true,
  },
  member1Email: {
    type: String,
    required: true,
  },
  member1tshirt: {
    type: String,
    required: true,
  },
  member2Name: {
    type: String,
    required: true,
  },
  member2Contact: {
    type: String,
    required: true,
  },
  member2Email: {
    type: String,
    required: true,
  },
  member2tshirt: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ProgContest = mongoose.model("ProgContest", PCSchema);
module.exports = ProgContest;
