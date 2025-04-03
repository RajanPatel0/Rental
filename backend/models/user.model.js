import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
        number: {
			type: Number,
			required: [true, "Number is required"],
			unique: true,
            minlength: [10, "Number should be 10 characters long"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [6, "Password must be at least 6 characters long"],
		},
		cartItems: [
			{
				quantity: {
					type: Number,
					default: 1,
				},
				property: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Property", //from product model
				},
			},
		],
		role: {
			type: String,
			enum: ["customer", "admin"],    //user can be only from these two options
			default: "customer",    //defaultly everyone is customer
		},
	},
	{
		timestamps: true,   //createdAt & //updatedAt
	}
);

// Pre-save hook to hash password before saving to database
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error) {
		next(error);
	}
});

userSchema.methods.comparePassword = async function (password) {
	return bcrypt.compare(password, this.password); //this.password is actual password stored in db
};

const User = mongoose.model("User", userSchema);

export default User;