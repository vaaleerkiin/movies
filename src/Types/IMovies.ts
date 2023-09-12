export interface IMvoies {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  original_title: string;
  genres?: [{ id: number; name: string }];
  vote_average: number;
}
