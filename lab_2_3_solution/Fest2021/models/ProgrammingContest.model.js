const mongoose = require("mongoose");
const CPSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  coach: {
    type: String,
    required: true,
  },
  leader: {
    type: String,
    required: true,
  },
  member1: {
    type: String,
    required: true,
  },
  member2: {
    type: String,
    required: true,
  },
  contactCoach: {
    type: String,
    required: true,
  },
  contactLeader: {
    type: String,
    required: true,
  },
  contactMember1: {
    type: String,
    required: true,
  },
  contactMember2: {
    type: String,
    required: true,
  },

  emailCoach: {
    type: String,
    required: true,
  },
  emailLeader: {
    type: String,
    required: true,
  },
  emailMember1: {
    type: String,
    required: true,
  },
  emailMember2: {
    type: String,
    required: true,
  },
  institution: {
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
  tshirtCoach: {
    type: String,
    required: true,
  },
  tshirtLeader: {
    type: String,
    required: true,
  },
  tshirtMember1: {
    type: String,
    required: true,
  },
  tshirtMember2: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ProgrammingContest = mongoose.model("ProgrammingContest", CPSchema);
module.exports = ProgrammingContest;
