import { IMovieItem } from "../dto";


export default class Model{
  movieList: IMovieItem[] = [];
  popularMovie: IMovieItem[] = [];
  favoriteMovies: IMovieItem[] = [];
  selectMovie: IMovieItem = null;
  loading: Boolean = true;
}