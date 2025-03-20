// UC 6 Arrays and 7 Maps

const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

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
    
    let dailyWage = calcDailyWage(empHrs);
    
    // Store in array
    empDailyWageArr.push(dailyWage);
    
    // Store day-wise wage in map
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

console.log("Daily Wage Map:");
console.log(empDailyWageMap);

// Compute total wage using map
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC7A - Emp Wage Map totalHrs: " +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
