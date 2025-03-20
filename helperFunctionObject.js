const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];
let empDailyWageWithTotalArr = [];

const calcDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case 0: return 8; // Full-time hours
        case 1: return 4; // Part-time hours
        default: return 0;
    }
};

// Generate daily wages
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
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

// a. Calculate total wage using reduce method
const totalWage = empDailyWageArr.reduce((total, dailyWage) => total + dailyWage, 0);
console.log("UC7A - Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalWage);

// b. Show the Day along with Daily Wage using map helper function
const mapDayWithWage = empDailyWageArr.map((dailyWage, index) => `${index + 1} = ${dailyWage}`);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWage);

// c. Show days when Full-time wage of 160 was earned using filter function
const fullDayWageArr = empDailyWageArr.filter(dailyWage => dailyWage === 160);
console.log("UC7C - Daily Wage Filter When Full-time Wage Earned:");
console.log(fullDayWageArr);

// d. Find the first occurrence when Full-time Wage was earned using find function
const firstFullTimeWageDay = mapDayWithWage.find(day => day.includes("160"));
console.log("UC7D - First time Full-time wage was earned on Day: " + firstFullTimeWageDay);

// e. Check if Every Element of Full-Time Wage is truly holding Full-time Wage
const isAllFulltimeWage = fullDayWageArr.every(dailyWage => dailyWage === 160);
console.log("UC7E - Check All Elements Have Full Time Wage: " + isAllFulltimeWage);

// f. Check if there is any Part-Time Wage
const isAnyParttimeWage = mapDayWithWage.some(day => day.includes("80"));
console.log("UC7F - Check If Any Part-Time Wage: " + isAnyParttimeWage);

// g. Find the number of days the Employee Worked
const totalDaysWorked = empDailyWageArr.reduce((numOfDays, dailyWage) => dailyWage > 0 ? numOfDays + 1 : numOfDays, 0);
console.log("UC7G - Number of Days Emp Worked: " + totalDaysWorked);

console.log("UC7 - Daily Wage Array: " + empDailyWageArr);
console.log("UC7 - Daily Wage With Total Wage Array: " + empDailyWageWithTotalArr);
