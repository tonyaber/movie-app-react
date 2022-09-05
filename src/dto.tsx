import MovieService from "./service/movieService";

export interface IMovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  tagline: string;
  favorite: boolean;
  production_companies: {
    id: number,
    logo_path: string,
  }[]
}

export interface IActor {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
}
export interface IItem{
  item: IMovieItem;
}

export interface IMovieList{
  movieList: Array<IMovieItem>
}
export interface IAboutItem{
  server: MovieService;
  onAddToFavorite: (id: number) => void;
  favorite: number[];
}

export interface IInformation{
  item: IMovieItem;
  onAddToFavorite: (id:number) => void;
}

export interface ISearchPanel{
  onSearchPanel: (text: string) => void;
  value: string;
}

export interface IPopularMovie {
  onPopularMovie: () => void;
}