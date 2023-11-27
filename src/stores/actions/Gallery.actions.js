import * as actionTypes from "./action-types";

export const getGalleryActions = (data, refresh) => ({
  type: actionTypes.GETGALLERY,
  payload: data,
  refresh,
});

export const getCallerySuccess = (data) => ({
  type: actionTypes.GET_GALLERY_SUCCESS,
  payload: data,
});
