import axios from "axios";
import { OmdbResponse } from "./models/omdbresponse";

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
  let omdbResponse = new OmdbResponse(
    response.data.totalResults,
    response.data.Search
  );

  console.log(omdbResponse);
  createHtml(omdbResponse.movies);
});

function createHtml(movies) {
  for (let i = 0; i < movies.length; i++) {
    let container = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");

    title.innerHTML = movies[i].name;
    img.src = movies[i].imageUrl;
    img.alt = movies[i].name;

    container.addEventListener("click", () => {
      console.log("Du valde:", movies[i]);
    });

    container.appendChild(title);
    container.appendChild(img);

    document.body.appendChild(container);
  }
}
