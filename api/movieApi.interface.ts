export interface IMovieQuery {
  query: string;
  page: number;
}

export interface IMovieListItem {
  id: number;
  title: string;
  posterPath: string;
}

export interface IMovieList {
  results: IMovieListItem[];
  totalResults: number;
  totalPages: number;
}
