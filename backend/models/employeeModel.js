import mongoose from 'mongoose'; 

const employeeSchema = new mongoose.Schema({
  employeeName: { 
    type: String, 
    required: true 
  },
  employeeId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  department: { 
    type: String, 
    required: true 
  },
  jobTitle: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'] 
  },
  phone: { 
    type: String, 
    required: true, 
    match: [/^\+?(\d.*){3,}$/, 'Please enter a valid phone number'] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});
 
const employeeModel = mongoose.model.employeeModel || mongoose.model("employee", employeeSchema)
 
export default employeeModel;