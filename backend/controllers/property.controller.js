import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";
import Property from "../models/property.model.js";

export const getAllProperty = async (req, res) => {
	try {
		const property = await Property.find({}); // find all products from databse i.e importing pdt.model.js
		res.json({ property });
	} catch (error) {
		console.log("Error in getAllProperty controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const getFeaturedProperty = async (req, res) => {
	try {
		let featuredProperty = await redis.get("featured_property");    //check if we've any featured product
		if (featuredProperty) {
			return res.json(JSON.parse(featuredProperty));
		}

		// if not in redis, fetch from mongodb
		// .lean() is gonna return a plain javascript object instead of a mongodb document
		// which is good for performance
		featuredProperty = await Property.find({ isFeatured: true }).lean();

		if (!featuredProperty) {
			return res.status(404).json({ message: "No featured properties found" });
		}

		// store in redis for future quick access

		await redis.set("featured_property", JSON.stringify(featuredProperty));

		res.json(featuredProperty);
	} catch (error) {
		console.log("Error in getFeaturedProperty controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const createProperty = async (req, res) => {
	try {
		const { name, address, price, image, category } = req.body;

		let cloudinaryResponse = null;

		if (image) {	//if user provide us image
			cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "property" });
		}

		const property = await Property.create({
			name,
			address,
			price,
			image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
			category,
		});

		res.status(201).json(property);
	} catch (error) {
		console.log("Error in createProperty controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const deleteProperty = async (req, res) => {
	try {
		const property = await Property.findById(req.params.id);

		if (!property) {
			return res.status(404).json({ message: "Property not found" });
		}

		if (property.image) {	//with property we've to also delete images from cloudinary db
			const publicId = property.image.split("/").pop().split(".")[0];  //this will get the id of the image
			try {	//spliting from (/) & we got latest one (pop) , split that from (.) & just get the first idx[0]
				await cloudinary.uploader.destroy(`property/${publicId}`);	//then deleting that id
				console.log("deleted image from cloduinary");
			} catch (error) {
				console.log("error deleting image from cloduinary", error);
			}
		}

		await Property.findByIdAndDelete(req.params.id);	//we should delete it from database also

		res.json({ message: "Property deleted successfully" });
	} catch (error) {
		console.log("Error in deleteProperty controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const getRecommendedProperty = async (req, res) => {
	try {
		const property = await Property.aggregate([  
			{
				$sample: { size: 4 },
			},
			{
				$project: {
					_id: 1,
					name: 1,
					address: 1,
					image: 1,
					price: 1,
				},
			},
		]);

		res.json(property);
	} catch (error) {
		console.log("Error in getRecommendedProperty controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const getPropertyByCategory = async (req, res) => {
	const { category } = req.params;
	try {
		const property = await Property.find({ category });
		res.json({ property });	//let's return here
	} catch (error) {
		console.log("Error in getPropertyByCategory controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const toggleFeaturedProperty = async (req, res) => {
	try {
		const property = await Property.findById(req.params.id);
		if (property) {
			property.isFeatured = !property.isFeatured;   //if true then bacame false & vice-verse
			const updatedProperty = await property.save();
			await updateFeaturedPropertyCache();
			res.json(updatedProperty);
		} else {
			res.status(404).json({ message: "Property not found" });
		}
	} catch (error) {
		console.log("Error in toggleFeaturedProperty controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

async function updateFeaturedPropertyCache() {  //this third function to set relation b/w toggle featured pdts. and get featured pdts.
	try {
		// The lean() method  is used to return plain JavaScript objects instead of full Mongoose documents. This can significantly improve performance

		const featuredProperty = await Property.find({ isFeatured: true }).lean();
		await redis.set("featured_property", JSON.stringify(featuredProperty));
	} catch (error) {
		console.log("error in update cache function");
	}
}
