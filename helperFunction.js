const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];
let empDailyWageWithTotalArr = [];

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

// Generate daily wages
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    
    let dailyWage = calcDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    empDailyWageWithTotalArr.push({
        day: totalWorkingDays,
        dailyWage: dailyWage,
        totalWage: calcDailyWage(totalEmpHrs)
    });
}

// a. Calculate total wage using forEach or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " +
    empDailyWageArr.reduce(totalWages, 0));

// b. Show the Day along with Daily Wage using map helper function
let dailyCnt = 0;
function mapDayWithWage(dailyWage) {
    dailyCnt++;
    return dailyCnt + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// c. Show days when Full-time wage of 160 was earned using filter function
function fulltimeWage(dailyWage) {
    return dailyWage === 160;
}
let fullDayWageArr = empDailyWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned:");
console.log(fullDayWageArr);

// d. Find the first occurrence when Full-time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage === 160;
}
console.log("UC7D - First time Fulltime wage was earned on Day: " +
    mapDayWithWageArr.find(findFulltimeWage));

// e. Check if Every Element of Full-Time Wage is truly holding Full-time Wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage === 160;
}
console.log("UC7E - Check All Element have Full Time Wage: " +
    fullDayWageArr.every(isAllFulltimeWage));

// f. Check if there is any Part-Time Wage
function isAnyParttimeWage(dailyWage) {
    return dailyWage === 80;
}
console.log("UC7F - Check If Any Part Time Wage: " +
    mapDayWithWageArr.some(isAnyParttimeWage));

// g. Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G - Number of Days Emp Worked: " +
    empDailyWageArr.reduce(totalDaysWorked, 0));
console.log("UC7 - Daily Wage Array: " + empDailyWageArr);
console.log("UC7 - Daily Wage With Total Wage Array: " + empDailyWageWithTotalArr);