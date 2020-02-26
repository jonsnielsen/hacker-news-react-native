import { TopNewsStoriesActionTypes } from "./stories.types";
import { action } from "typesafe-actions";
import { IStory } from "../../types/Story";

export const loadTopNewsStoriesRequest = () =>
  action(TopNewsStoriesActionTypes.LOAD_STORY_REQUEST);

export const loadTopNewsStoriesSuccess = (newsStories: IStory[]) => {
  return action(TopNewsStoriesActionTypes.LOAD_STORY_SUCCESS, newsStories);
};
export const loadTopNewsStoriesFailure = () =>
  action(TopNewsStoriesActionTypes.LOAD_STORY_FAILURE);



//   export const loadStoriesRequest = () =>
//   action(NewsStoriesActionTypes.LOAD_STORY_REQUEST);
  
// export const loadStoriesSuccess = (newsStories: IStory[]) => {
//   return action(NewsStoriesActionTypes.LOAD_STORY_SUCCESS, newsStories);
// };
// export const loadStoriesFailure = () =>
//   action(NewsStoriesActionTypes.LOAD_STORY_FAILURE);


