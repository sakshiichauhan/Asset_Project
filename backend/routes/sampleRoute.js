// import express from 'express'
// import { getSample } from '../controller/sampleController.js';

// const sampleRouter = express.Router()

// sampleRouter.get('/sample-get', getSample);

// export {sampleRouter}

import express from "express";
import { getSample } from "../controller/sampleController.js";

const sampleRouter = express.Router();

sampleRouter.get("/sample-get", getSample);

export { sampleRouter };
