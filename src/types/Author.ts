export interface AuthorDTO {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
}

export interface Author extends AuthorDTO {}
