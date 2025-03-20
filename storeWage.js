// UC 6 Arrays

const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageWithTotalArr = new Array();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 0:
            return 8; // Full-time hours
        case 1:
            return 4; // Part-time hours
        default:
            return 0;
    }
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    
    // Store daily wage in an array
    let dailyWage = calcDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);

    // Store daily wage along with total wage in an array of objects
    empDailyWageWithTotalArr.push({
        day: totalWorkingDays,
        dailyWage: dailyWage,
        totalWage: calcDailyWage(totalEmpHrs)
    });
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

console.log("Daily Wages: ", empDailyWageArr);
console.log("Daily Wage with Total Wage: ", empDailyWageWithTotalArr);
