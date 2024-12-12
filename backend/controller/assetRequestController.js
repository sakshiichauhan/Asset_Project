import requestAssetModel from "../models/assetRequestModel";

//create request
export const createRequest = async (req,res) => {
    try {
        const {employeeID, requestDate,assetCategory,assetNameDescription, quantityRequested,assetSpecifications,reasonForRequest,priorityLevel,requiredByDate} = req.body;

        const reqAsset = {
            employeeID,
            requestDate,
            assetCategory,
            assetNameDescription,
            quantityRequested,
            assetSpecifications,
            reasonForRequest,
            priorityLevel,
            requiredByDate
        }
    
        //save the request in the request table
        await reqAsset.save();
        res.status(201).json({
            message : "Successful creation of request",
            reqAsset
        });

    }catch(error){
        res.status(500).json({
            message : "Error while creating request",
            error : error.message
        })
    }
}

//get all the requests
export const getRequestAsset = async (req,res) => {
    try {
        const getRequest = await requestAssets.find();
        res.status(200).json({
            message : "success"
        })
    }
}