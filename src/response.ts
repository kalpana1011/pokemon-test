 export type Pokemon = {
  name: string;
  url: string;
}
export type Response = {
  count: number;
  next: string;
  previous: any | null;
  results: Array<Pokemon>;
}