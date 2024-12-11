import employeeModel from '../models/employeeModel.js';

// Create new employee
export const createEmployee = async (req, res) => {
  try {
    const employee =  employeeModel(req.body);
    await employee.save();
    res.status(201).json({
        message : "New employee registered"
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create employee' });
  }
};

// Get all employees
export const getEmployees = async (req, res) => {
  try {
    const employee = await employee.find();
    res.status(200).json({
        message : "success"
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employees' });
  }
};

// Get employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const Emp = await employeeModel.findById(req.params.id);
    if (!Emp) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json({
        message : "Employee details",
        Emp
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employee' });
  }
};

// Update employee by ID
export const updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await employeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json({
        updatedEmployee
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update employee' });
  }
};

// Delete employee by ID
export const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await employeeModel.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete employee' });
  }
};
