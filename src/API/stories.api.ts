import API from "./API";
import { IStoryDTO } from "../types/Story";

export const fetchTopNewsStoriesIds = async () => {
  const response = await API.get<number[]>("topstories.json");
  return response.data;
};

export const fetchJobStoriesIds = async () => {
  const response = await API.get<number[]>("jobstories.json")
  return response.data
}

export const fetchQuestionStoriesIds = async () => {
  const response = await API.get<number[]>("jobstories.json")
  return response.data
}

interface IFetchStory {
  id: number;
}
export const fetchStory = async ({ id }: IFetchStory) => {
  const response = await API.get<IStoryDTO>(`item/${id}.json`);
  return response.data;
};