class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) { this._name = name; }

    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : 
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + 
               "', salary=" + this.salary + ", gender=" + this.gender + 
               ", startDate=" + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Shreya", 30000, "F");
console.log(employeePayrollData.toString());
employeePayrollData.name = "Muskan";
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(1, "Mansi", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
