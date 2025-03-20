class EmployeePayrollData {
    // property
    id;
    salary;

    // constructor
    constructor(id, name, salary) {
        this.id = id;
        this._name = name; // Use underscore for internal property
        this.salary = salary;
    }

    // getter and setter method
    get name() { 
        return this._name; 
    }

    set name(name) { 
        this._name = name; 
    }

    // method
    toString() {
        return "id=" + this.id + 
               ", name='" + this.name + 
               "', salary=" + this.salary;
    }
}

//Creating new object
let employeePayrollData = new EmployeePayrollData(1, "Muskan", 30000);
console.log(employeePayrollData.toString()); 

//Modifying the name using setter
employeePayrollData.name = "Mansi";
console.log(employeePayrollData.toString()); 
