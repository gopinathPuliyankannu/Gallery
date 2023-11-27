import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "../actions/action-types";
import * as actions from "../actions/Gallery.actions";
import { getGalleryServices } from "../../services/Gallery.service";

const refreshDiabled = (action) => {
  action.refresh(false);
};

export function* fetchLoginData(action) {
  try {
    const response = yield call(getGalleryServices, action.payload);
    const { status, data } = response;
    if (status === 200) {
      refreshDiabled(action);
      yield put(actions.getCallerySuccess(data));
    } else {
      refreshDiabled(action);
    }
  } catch (error) {
    refreshDiabled(action);
  }
}

export function* watchGalleryAsync() {
  yield takeLatest(actionTypes.GETGALLERY, fetchLoginData);
}
