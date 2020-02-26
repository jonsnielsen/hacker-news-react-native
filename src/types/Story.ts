import { Author } from "./Author";
// Stories, comments, jobs, Ask HNs and even polls are just items.
export interface IStoryDTO {
  deleted: boolean; // true if the item is deleted.
  by: string; // The username of the item's author.
  descendants: number; // In the case of stories or polls, the total comment count.
  id: number; // The item's unique id.
  kids: number[]; //The ids of the item's comments, in ranked display order.
  score: number; // The story's score, or the votes for a pollopt.
  text: string; // The comment, story or poll text. HTML.
  time: number; // Creation date of the item, in Unix Time.
  dead: boolean; // true if the item is dead.
  title: string; // The title of the story, poll or job. HTML.
  poll: number; // The pollopt's associated poll.
  parts: number[]; // A list of related pollopts, in display order.
  parent: number; // The comment's parent: either another comment or the relevant story.
  type: string; // The type of item. One of "job", "story", "comment", "poll", or "pollopt".
  url: string; // The URL of the story.
}

export interface IStory {
  author: Author;
  simplifiedUrl: string;
  deleted: boolean; // true if the item is deleted.
  descendants: number; // In the case of stories or polls, the total comment count.
  id: number; // The item's unique id.
  kids: number[]; //The ids of the item's comments, in ranked display order.
  score: number; // The story's score, or the votes for a pollopt.
  text: string; // The comment, story or poll text. HTML.
  time: number; // Creation date of the item, in Unix Time.
  dead: boolean; // true if the item is dead.
  title: string; // The title of the story, poll or job. HTML.
  poll: number; // The pollopt's associated poll.
  parts: number[]; // A list of related pollopts, in display order.
  parent: number; // The comment's parent: either another comment or the relevant story.
  type: string; // The type of item. One of "job", "story", "comment", "poll", or "pollopt".
  url: string; // The URL of the story.
}
