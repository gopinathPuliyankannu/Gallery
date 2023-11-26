import { combineReducers } from "redux";
import { GalleryListReducer } from "./Gallery.reducer";

const appReducers = combineReducers({
  galleryList: GalleryListReducer,
});

export const rootReducer = (state, action) => {
  return appReducers(state, action);
};
