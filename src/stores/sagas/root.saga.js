import { all } from "redux-saga/effects";
import { watchGalleryAsync } from "./Gallery.saga";

export function* rootSaga() {
  yield all([watchGalleryAsync()]);
}
