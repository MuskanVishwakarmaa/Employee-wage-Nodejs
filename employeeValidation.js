// employeeValidation.js

function validateEmployeeDetails(employeeId, salary, gender, date) {
    try {
      // Validate employee ID: Non-zero positive number
      const idPattern = /^[1-9][0-9]*$/;
      if (!idPattern.test(employeeId)) {
        throw new Error("Employee ID must be a non-zero positive number.");
      }
  
      // Validate salary: Non-zero positive number
      const salaryPattern = /^[1-9][0-9]*(\.[0-9]+)?$/;
      if (!salaryPattern.test(salary)) {
        throw new Error("Salary must be a non-zero positive number.");
      }
  
      // Validate gender: 'M' or 'F'
      const genderPattern = /^[MF]$/;
      if (!genderPattern.test(gender)) {
        throw new Error("Gender must be 'M' or 'F'.");
      }
  
      // Validate date: Not a future date
      const today = new Date();
      const inputDate = new Date(date);
      if (inputDate > today) {
        throw new Error("Date cannot be a future date.");
      }
  
      console.log("Employee details are valid.");
    } catch (error) {
      console.error("Validation error:", error.message);
    }
  }
  
  // Example Usage
  validateEmployeeDetails(123, 5000, 'M', '2025-03-19');
  