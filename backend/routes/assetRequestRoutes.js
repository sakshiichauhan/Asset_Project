import express from "express";
import {createRequest} from "../controller/assetRequestController.js";

const requestAssetRouter = express.Router();

requestAssetRouter.post("create-request", createRequest);





export default requestAssetRouter;