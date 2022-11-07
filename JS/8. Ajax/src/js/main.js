import axios from "axios";

console.log("Start");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hurra! Det fungerar!");
  }, 3000);
});

console.log("In between");

// function success(message) {
//   console.log("Success!", message);
// }

// function error() {
//   console.log("Error");
// }

promise.then(
  (message) => {
    console.log("Success!", message);
  },
  () => {
    console.log("Error");
  }
);

console.log("End");

// fetch("http://www.omdbapi.com/?apikey=416ed51a&s=star")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     createHtml(data.Search);
//   });

axios.get("http://www.omdbapi.com/?apikey=416ed51a&s=star").then((response) => {
  console.log(response.data);
  createHtml(response.data.Search);
});

function createHtml(movies) {
  for (let i = 0; i < movies.length; i++) {
    let container = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");

    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    img.alt = movies[i].Title;

    container.addEventListener("click", () => {
      console.log("Du valde:", movies[i]);
    });

    container.appendChild(title);
    container.appendChild(img);

    document.body.appendChild(container);
  }
}
