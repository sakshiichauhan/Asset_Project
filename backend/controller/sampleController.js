import sampleModel from "../models/sampleModel.js";

const getSample = async (req, res) => {
    try {
        const sampleData = {
            name: "sakshi Doe",
            username: "sakshidoe",
            password: "password123", // Note: Hash this in production!
        };

        const createdSample = await sampleModel.create(sampleData);

        res.status(201).json({
            success: true,
            data: createdSample,
            message: "Sample data created successfully!",
        });
    } catch (error) {
        console.error("Error in getSample:", error.message);
        res.status(500).json({
            success: false,
            message: "Failed to create sample data.",
            error: error.message,
        });
    }
};

export { getSample };
