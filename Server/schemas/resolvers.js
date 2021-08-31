const { User, Reminder } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("reminders");
        return user;
      }
      throw new AuthenticationError("Not logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addReminder: async (parent, args, context) => {
      if (context.user) {
        const reminder = await Reminder.create({ ...args, username: context.user.username });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { reminders: reminder._id } },
          { new: true }
        );
        return reminder;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Need to be logged in!");
    },
    deleteReminder: async (parent, { reminderId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reminders: reminderId } },
          { new: true }
        )
        return updatedUser;
      }
      throw new AuthenticationError("Need to be logged in!");
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Incorrect Credentials!");
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Incorrect Credentials!");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
