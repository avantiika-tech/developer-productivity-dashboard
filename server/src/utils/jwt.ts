import jwt from "jsonwebtoken";

export const generateJwtToken = (userId: string) => {
	return jwt.sign(
		{
			id: userId,
		},
		process.env.JWT_SECRET!,
		{
			expiresIn: "30d",
		},
	);
};
