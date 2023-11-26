import * as actionTypes from "./action-types";

export const getGalleryActions = (data) => ({
  type: actionTypes.GETGALLERY,
  payload: data,
});

export const getCallerySuccess = (data) => ({
  type: actionTypes.GET_GALLERY_SUCCESS,
  payload: data,
});
