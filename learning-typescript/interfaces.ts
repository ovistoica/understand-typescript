// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (ab: number, b: number) => ab + b;

interface Person {
  name: string;
  readonly age: number;

  greet: (phrase: string) => void;
}

class MyPerson implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet() {
    console.log("I am person!", this.name);
  }
}

let pers: Person;

pers = new MyPerson("Mihai", 23);
