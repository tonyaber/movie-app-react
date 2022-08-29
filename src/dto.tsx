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
}
export interface IItem{
  item: IMovieItem
  onSelect: () => void;
}

export interface IMovieList{
  movieList: Array<IMovieItem>
  onSelect: (id: number) => void;
}
export interface IAboutItem{
  item: IMovieItem
}

export interface IRandom {
    onRandom: (id: number)=>void
}

export interface ISearchPanel{
  onSearchPanel: (text: string) => void;
}