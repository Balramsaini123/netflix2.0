import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:".env"
})

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
    }
};
export default databaseConnection;