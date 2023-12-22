// Requests
export interface IMovieGetList {
  query: string;
  page: number;
}

// Contents
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

export interface IMovieDetail {
  originalTitle: string;
  posterPath: string;
  overview?: string;
  genres?: {
    id: number;
    name: string;
  }[];
  releaseDate?: string;
  popularity?: string;
  imdbId?: string;
}
