import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./class-validator";
import { validate } from "class-validator";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: -10.99 }
];

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  validate(prod).then(errors => {
    if (errors.length > 0) {
      console.log(errors.map(error => error.constraints));
    } else {
      console.log(prod.getInformation());
    }
  });
}
