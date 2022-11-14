import { IMovie } from "./models/IMovie";
import { IOmdbResponse } from "./models/IOmdbResponse";
import axios from "axios";
import { Person } from "./models/Person";

let x: number = 17;
console.log(x);

let firstname: string = "Sebastian";
let isMarried: boolean = true;

let numbers: number[] = [1, 1, 2, 3, 5, 8];

let p: Person = new Person("Sebastian", 43);
console.log(p.name);

axios
  .get<IOmdbResponse>("http://www.omdbapi.com/?apikey=416ed51a&s=star")
  .then((response) => {
    console.log(response.data.Search);
    createHtml(response.data.Search);
  });

function createHtml(movies: IMovie[]): void {
  let container: HTMLDivElement = document.getElementById(
    "movieContainer"
  ) as HTMLDivElement;

  for (let i: number = 0; i < movies.length; i++) {
    console.log(movies[i].Title);

    let title: HTMLHeadingElement = document.createElement("h3");
    title.innerHTML = movies[i].Title;

    container.appendChild(title);
  }
}

function add(x: number, y: number): number {
  return x + y;
}

let sum: number = add(1, 2);
