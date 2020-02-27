type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Gigi",
  startDate: new Date(),
  privileges: ["boss"]
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function anotherAdd(a: number, b: number): number;
function anotherAdd(a: string, b: string): string;
function anotherAdd(a: number, b: string): string;
function anotherAdd(a: string, b: number): string;
function anotherAdd(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = anotherAdd("Max", 1);

const fetchedUserData = {
  id: "i1",
  name: "Ovi",
  job: { title: "CEO", description: "THe big boss" }
};

console.log(fetchedUserData?.job?.title);

const myInput = "";

const storedData = myInput ?? "DEFAULT";

console.log(storedData);

type UnknownEmp = Employee | Admin;

const printEmpInfo = (emp: UnknownEmp) => {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Priviledge", emp.privileges);
  }
};

printEmpInfo(e1);

class Car {
  drive() {
    console.log("DRiving");
  }
}

class Truck {
  drive() {
    console.log("Driving but a truck one");
  }

  loadCargo() {
    console.log("I am heavieer now");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

useVehicle(v1);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed", speed);
};

moveAnimal({ type: "bird", flyingSpeed: 50 });

const userInput = document.getElementById("msg")! as HTMLInputElement;

userInput.value = "Hello There";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with capital character"
};
