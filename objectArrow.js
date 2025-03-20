// UC 11 Object Operations using Arrow Functions

let empDailyHrsAndWageArr = [
    { dayNum: 1, dailyHours: 8, dailyWage: 160 },
    { dayNum: 2, dailyHours: 4, dailyWage: 80 },
    { dayNum: 3, dailyHours: 0, dailyWage: 0 },
    { dayNum: 4, dailyHours: 8, dailyWage: 160 },
    { dayNum: 5, dailyHours: 4, dailyWage: 80 },
    { dayNum: 6, dailyHours: 0, dailyWage: 0 }
];

//Step a: Calc total Wage and total hours worked
let totalWages = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage + dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours + dailyHrsAndWage.dailyHours, 0);

console.log(`UC 11A Total Hours: ${totalHours} Total Wages: ${totalWages}`);

//Step b: Show the full working days using forEach
process.stdout.write("UC 11B Logging Full Work Days:");
empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours === 8)
    .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

//Step c: Show Part working days using map by reducing to String Array
let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours === 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log(`\nUC 11C PartWorkingDayStrings: ${partWorkingDayStrArr}`);

//Step d: No working days only using map function
let nonWorkingDayNums = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours === 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log(`UC 11D NonWorkingDayNums: ${nonWorkingDayNums}`);
