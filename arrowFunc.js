// UC 9 Arrow Functions

const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyHrsMap = new Map();

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
    
    // Store daily hours and wages
    empDailyWageArr.push(dailyWage);
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}

// ✅ a. Calculate total wage and total hours worked using arrow function
const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;

let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr
    .filter(dailyWage => dailyWage > 0)
    .reduce(findTotal, 0);

console.log("UC9A - Emp Wage with Arrow: " +
    "Total Hours: " + totalHours +
    " Total Wages: " + totalSalary);

// ✅ b. Show full working days, part working days, and non-working days
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key) => {
    if (value === 8) fullWorkingDays.push(key);
    else if (value === 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);
