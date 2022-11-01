let someNumber = 10000;

console.log(someNumber > 10000);

if (someNumber > 10000) {
  console.log("Det var ett jättestort tal");
} else {
  if (someNumber === 10000) {
    console.log("Talet är perfekt 10000");
  } else {
    console.log("Det var ett mer normalt tal");
  }
}

for (let i = 0; i < 10; i++) {
  //   console.log(i + 1);
  if (i % 2 === 0) {
    console.log(i + " är delbart med 2");
  }
}

// let numberToLoop = 10000;
// let currentLoop = 0;
// while (currentLoop < numberToLoop) {
//   console.log(currentLoop);
//   currentLoop++;
// }

let pTag = document.getElementById("someText");
console.log(pTag);

pTag.className = "green"; // <p id="someText" class="green">....</p>
pTag.innerHTML = "Hej hej";

function doSearch() {
  let userInput = document.getElementById("searchText"); // <input />
  let resultTag = document.getElementById("result"); // <p>

  let textFromInput = userInput.value; // ?
  resultTag.innerHTML = textFromInput; // <p>?</p>
}
