import mongoose from "mongoose";

export const connectDB = async (connection: string) => {
	try {
		await mongoose.connect(connection);

		console.log("MongoDB Atlas Connected");
	} catch (error) {
		console.error(error);
	}
};
