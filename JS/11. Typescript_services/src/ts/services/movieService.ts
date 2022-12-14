import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

// export function searchMovies(searchText: string): Promise<IMovie[]> {
//   return axios
//     .get<IOmdbResponse>(
//       `http://www.omdbapi.com/?s=${searchText}&apikey=416ed51a`
//     )
//     .then((response) => {
//       return response.data.Search;
//     });
// }

export async function searchMovies(searchText: string): Promise<IMovie[]> {
  let response = await axios.get<IOmdbResponse>(
    `http://www.omdbapi.com/?s=${searchText}&apikey=416ed51a`
  );

  return response.data.Search;
}

// export function searchMovies(searchText: string): Promise<IMovie[]> {
//   return fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=416ed51a`)
//     .then((response) => response.json())
//     .then((data: IOmdbResponse) => {
//       return data.Search;
//     });
// }

// export async function searchMovies(searchText: string): Promise<IMovie[]> {
//   let response = await fetch(
//     `http://www.omdbapi.com/?s=${searchText}&apikey=416ed51a`
//   );
//   let data: IOmdbResponse = await response.json();

//   return data.Search;
// }
