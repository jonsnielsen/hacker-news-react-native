import API from "./API";
import { IStoryDTO } from "../types/Story";

export const fetchTopNewsStoriesIds = async () => {
  const response = await API.get<number[]>("topstories.json");
  return response.data;
};

interface IFetchNewsStory {
  id: number;
}
export const fetchNewsStory = async ({ id }: IFetchNewsStory) => {
  const response = await API.get<IStoryDTO>(`item/${id}.json`);
  return response.data;
};
