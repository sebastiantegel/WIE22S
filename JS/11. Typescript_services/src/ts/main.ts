import axios from "axios";
import { IMovie } from "./models/IMovie";
import { IOmdbResponse } from "./models/IOmdbResponse";

(document.getElementById("searchForm") as HTMLFormElement).addEventListener(
  "submit",
  (e: SubmitEvent) => {
    e.preventDefault();

    let searchText = handleSearchText();

    getData(searchText);
  }
);

function handleSearchText(): string {
  let searchInput: HTMLInputElement = document.getElementById(
    "searchText"
  ) as HTMLInputElement;

  let searchText: string = searchInput.value;
  searchInput.value = "";

  return searchText;
}

function getData(searchText: string) {
  axios
    .get<IOmdbResponse>(
      // "http://www.omdbapi.com/?apikey=416ed51a&s=" + searchText
      `http://www.omdbapi.com/?s=${searchText}&apikey=416ed51a`
    )
    .then((response) => {
      createHtml(response.data.Search);
    });
}

function createHtml(movies: IMovie[]) {
  let container: HTMLDivElement = document.getElementById(
    "movieContainer"
  ) as HTMLDivElement;

  container.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let title: HTMLHeadingElement = document.createElement("h3");

    title.innerHTML = movies[i].Title;

    container.appendChild(title);
  }
}
