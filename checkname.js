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
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is Incorrect!';
        }
    }

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

try {
    let employeePayrollData1 = new EmployeePayrollData(1, "Muskan", 30000, "F", new Date());
    console.log(employeePayrollData1.toString());
    
    let employeePayrollData2 = new EmployeePayrollData(2, "Shreya", 35000, "F", new Date());
    console.log(employeePayrollData2.toString());
    
    let employeePayrollData3 = new EmployeePayrollData(3, "Mansi", 40000, "F", new Date());
    console.log(employeePayrollData3.toString());
    
    // Throws Error
    employeePayrollData1.name = "john"; 
    console.log(employeePayrollData1.toString());
} catch (e) {
    console.error(e);
}
