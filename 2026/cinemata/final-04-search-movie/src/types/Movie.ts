export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster: string;
};

export type MovieResult = {
  page: number;
  results: { id: number; title: string; overview: string; poster_path: string }[];
};
