const { Schema, model } = require("mongoose");

const reminderSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    textBody: {
      type: String,
      required: true,
      maxLength: 180,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Reminder = model("Reminder", reminderSchema);

module.exports = Reminder;
