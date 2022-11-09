import { Movie } from "./movie";

export class OmdbResponse {
  constructor(amount, search) {
    this.tot = amount;
    this.movies = search.map((omdbMovie) => {
      return new Movie(omdbMovie.Title, omdbMovie.Poster);
    });
  }
}
