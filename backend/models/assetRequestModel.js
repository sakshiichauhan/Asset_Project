import mongoose from "mongoose";

const requestAssetSchema = new mongoose.Schema(
    {
    employeeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
        required: true,
    },
    requestDate: {
        type: Date,
        default: Date.now,
    },
    assetCategory: {
        type: String,
        required: true,
    },
    assetNameDescription: {
        type: String,
        required: true,
    },
    quantityRequested: {
        type: Number,
        required: true,
    },
    assetSpecifications: {
        type: String,
    },
    reasonForRequest: {
        type: String,
    },
    priorityLevel: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true,
    },
    requiredByDate: {
        type: Date,
        required: true,
    },
},
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
      }
    
);

const requestAssetModel = mongoose.model.requestAssetModel || mongoose.model("requestAssets", requestAssetSchema);

export default requestAssetModel;