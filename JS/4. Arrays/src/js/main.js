let firstname = "Sebastian";

console.log(firstname.length);
console.log(firstname[0]);
console.log(firstname[5].toUpperCase());
// console.log(firstname[20].toUpperCase());

for (let i = 0; i < firstname.length; i++) {
  //   console.log(firstname[i]);
}

let numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 === 0) {
  //     console.log(numbers[i]);
  //   }

  sum += numbers[i];
}

console.log("Summan av talen är:", sum);

function search(toSearchFor) {
  let found = false;
  let numberOfOccurances = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === toSearchFor) {
      numberOfOccurances++;
      found = true;
    }
  }

  if (found) {
    console.log("Hittade talet", numberOfOccurances, "gånger");
  }

  return found;
}

let foundTheNumber = search(1);
console.log("Hittade talet, men utanför funktionen:", foundTheNumber);

let theUl = document.getElementById("theNumbers");

for (let i = 0; i < numbers.length; i++) {
  theUl.innerHTML += "<li class='anumber'>" + numbers[i] + "</li>";
}
