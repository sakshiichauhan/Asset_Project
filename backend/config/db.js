import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.createConnection("mongodb+srv://karanchourasia:ALbmf8cEkZRSRpby@cluster-resource-app.ljblo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Resource-App");
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); 
    }
};
