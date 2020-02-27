class Department {
  constructor(
    private readonly id: string,
    private name: string,
    private employees: string[] = []
  ) {}

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log("I am the departament", this.name);
    console.log("My Employees:", this.employees);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  private lastReport: string;
  constructor(id: string, name: string, admins?: string[]) {
    super(id, name);
    this.lastReport = "first";
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
}

const myDep = new ITDepartment("1234", "Accounting");

console.log(myDep.mostRecentReport);

myDep.addEmployee("Mihai");

myDep.addEmployee("Laur");

myDep.describe();

const employee1 = Department.createEmployee("Hello");
