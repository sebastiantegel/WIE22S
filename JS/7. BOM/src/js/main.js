import { Car } from "./models/car";
import { Location } from "./models/locations";

let cars = [
  new Car("blue", 300),
  new Car("red", 1000000),
  new Car("yellow", 100),
];
let cart = [];

for (let i = 0; i < cars.length; i++) {
  let container = document.createElement("div");
  let color = document.createElement("p");

  color.innerHTML = cars[i].color;

  container.addEventListener("click", () => {
    handleClick(cars[i]);
  });

  container.appendChild(color);

  document.body.appendChild(container);
}

function handleClick(car) {
  console.log("Du klickade på", car);

  cart.push(car);
  createCartHTML();
}

function createCartHTML() {
  let cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let itemInCart = document.createElement("h4");

    itemInCart.innerHTML = cart[i].color;

    cartContainer.appendChild(itemInCart);
  }
}

document.getElementById("backbutton").addEventListener("click", goBack);
document.getElementById("forwardbutton").addEventListener("click", goForward);
document
  .getElementById("startinterval")
  .addEventListener("click", startInterval);
document.getElementById("stopinterval").addEventListener("click", stopPing);
document
  .getElementById("getposition")
  .addEventListener("click", getSinglePosition);

function goBack() {
  history.back();
}

function goForward() {
  history.forward();
}

let interval = 0;
function startInterval() {
  interval = setInterval(() => {
    console.log("Ping");
  }, 1000);
}

function stopPing() {
  clearInterval(interval);
}

setTimeout(() => {
  console.log("delayed log");
}, 3000);

function getSinglePosition() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(success, error);
  }
}

let locations = [];

function success(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let currentPosition = new Location(
    position.coords.latitude,
    position.coords.longitude
  );
  locations.push(currentPosition);
}

function error(theError) {
  console.log(theError);
}
