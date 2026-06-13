import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	githubId: String,

	name: String,

	email: {
		type: String,
		unique: true,
	},

	avatar: String,
});

export const User = mongoose.model("User", userSchema);
