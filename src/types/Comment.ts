export interface ICommentDTO {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}
export interface IComment {
  by: string;
  text: string;
  id: number;
  kids: IComment[];
  time: number;
}
