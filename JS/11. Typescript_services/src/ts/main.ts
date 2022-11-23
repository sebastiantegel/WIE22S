import { IMovie } from "./models/IMovie";
import { searchMovies } from "./services/movieService";

(document.getElementById("searchForm") as HTMLFormElement).addEventListener(
  "submit",
  async (e: SubmitEvent) => {
    e.preventDefault();

    let searchText = handleSearchText();

    // searchMovies(searchText).then((movies) => {
    //   createHtml(movies);
    // });

    let movies = await searchMovies(searchText);
    createHtml(movies);
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
