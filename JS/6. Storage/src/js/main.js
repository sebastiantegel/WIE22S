localStorage.setItem("name", "Sebastian");
let valueFromLs = localStorage.getItem("name");

console.log(valueFromLs);

class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
    this.milage = 0;
  }

  drive(distance) {
    this.milage += distance;
  }
}

// let car = new Car("blue", 300);
// console.log(car);

// let convertedCar = JSON.stringify(car);
// localStorage.setItem("car", convertedCar);

// let carFromLs = localStorage.getItem("car");
// console.log(carFromLs);

// let carObj = JSON.parse(carFromLs);
// console.log(carObj);

// let newCar = new Car(carObj.color, carObj.speed);
// console.log(newCar);

let cars = [new Car("blue", 300), new Car("red", 1000000)];
console.log(cars);

localStorage.setItem("cars", JSON.stringify(cars));

let carsFromLs = localStorage.getItem("cars");
console.log("Cars", carsFromLs);

let carsObj = JSON.parse(carsFromLs);

// let newCars = [];
// for (let i = 0; i < carsObj.length; i++) {
//   console.log(carsObj[i]);
//   newCars.push(new Car(carsObj[i].color, carsObj[i].speed));
// }

let newCars = carsObj.map((car) => {
  return new Car(car.color, car.speed);
});

console.log(newCars);

cars[0].drive(40);
cars[0].drive(50);
cars[1].drive(200);
console.log(cars);
