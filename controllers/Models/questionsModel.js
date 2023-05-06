// const mongoose = require("mongoose");

// const questionModel = new mongoose.Schema({
//   questions: { type: Array, default: [] },
//   answers: { type: Array, default: [] },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("question", questionModel);

import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
  questions: { type: Array, default: [] }, // create question with [] default value
  answers: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Question", questionModel);
