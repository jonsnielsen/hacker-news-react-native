import API from "./API";
import { AuthorDTO } from "../types/Author";

interface IFetchAuthor {
  id: string;
}

export const fetchAuthor = async ({ id }: IFetchAuthor) => {
  const response = await API.get<AuthorDTO>(`user/${id}.json`);
  return response.data;
};
