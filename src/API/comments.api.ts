import API from "./API";
import { ICommentDTO } from "../types/Comment";

interface IFetchComment {
  id: number;
}

export const fetchComment = async ({ id }: IFetchComment) => {
  const response = await API.get<ICommentDTO>(`item/${id}.json`);
  return response.data;
};
