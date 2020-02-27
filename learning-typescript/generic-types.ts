const names: Array<string> = ["Max", "Ovi"];

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["BJJ"] }, { age: 23 });

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descripyionText: "Got no value";
  if (element.length > 0) {
    console.log("Got bigger than 1");
  }
}

console.log(countAndPrint("Hello"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Michael" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");

console.log(textStorage.getItems());
