import mongoose from "mongoose";

const requestAssetSchema = new mongoose.Schema({
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
    // Approval Workflow
    managerApproval: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    },
    managerComments: {
        type: String,
    },
    // Status Tracking
    requestStatus: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const requestAssetModel = mongoose.model.requestAssetModel || mongoose.model("requestAssets", requestAssetSchema);

export default requestAssetModel;