
import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const sampleModel = mongoose.model("Sample", sampleSchema);

export default sampleModel;
