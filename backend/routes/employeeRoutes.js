import express from "express"
import {createEmployee,getEmployees,getEmployeeById,deleteEmployee,updateEmployee} from "../controller/employeeController.js"

const employeeRouter = express.Router();

employeeRouter.post("/create-employee", createEmployee)
employeeRouter.get("/get-employees", getEmployees)
employeeRouter.get("/get-employees/:id", getEmployeeById )
employeeRouter.put("/update-employee", updateEmployee )
employeeRouter.delete("/delete-employee", deleteEmployee )



export default employeeRouter;