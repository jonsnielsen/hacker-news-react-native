import { Author } from "./Author";
export interface INewsStoryDTO {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface INewsStory {
  author: Author;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  simplifiedUrl: string;
}
