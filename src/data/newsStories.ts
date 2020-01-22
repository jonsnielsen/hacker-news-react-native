import API from "./API";
import { NewsStory } from "../store/news-stories/types";

export const fetchTopNewsStories = () => {
  return API.get<number[]>("topstories.json");
};

interface IFetchNewsStory {
  id: number;
}
export const fetchNewsStory = ({ id }: IFetchNewsStory) => {
  return API.get<NewsStory>(`item/${id}.json`);
};
