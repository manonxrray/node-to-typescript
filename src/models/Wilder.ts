import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Wilder = new Schema({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});

module.exports = mongoose.model("wilder", Wilder);
