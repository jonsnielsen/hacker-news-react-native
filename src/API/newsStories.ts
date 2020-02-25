import API from "./API";
import { INewsStoryDTO } from "../types/NewsStory";

export const fetchTopNewsStoriesIds = async () => {
  const response = await API.get<number[]>("topstories.json");
  return response.data;
};

interface IFetchNewsStory {
  id: number;
}
export const fetchNewsStory = async ({ id }: IFetchNewsStory) => {
  const response = await API.get<INewsStoryDTO>(`item/${id}.json`);
  return response.data;
};
