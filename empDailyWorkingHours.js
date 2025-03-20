// UC 3 - Refactored code to write function for daily working hours

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

/**
 * Function to get employee work hours
 * @param {number} empCheck - Random attendance check value
 * @returns {number} Work hours for the employee
 */
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Generate random value for employee attendance
let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;

console.log("Emp Wage: " + empWage);
