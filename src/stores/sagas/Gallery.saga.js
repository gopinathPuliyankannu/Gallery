import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "../actions/action-types";
import * as actions from "../actions/Gallery.actions";
import { getGalleryServices } from "../../services/Gallery.service";

export function* fetchLoginData(action) {
  try {
    const response = yield call(getGalleryServices, action.payload);
    const { status, data } = response;
    if (status === 200) {
      yield put(actions.getCallerySuccess(data));
    }
  } catch (error) {}
}

export function* watchGalleryAsync() {
  yield takeLatest(actionTypes.GETGALLERY, fetchLoginData);
}
