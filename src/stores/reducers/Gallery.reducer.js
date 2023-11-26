import { updateObject } from "../../core/helper";
import * as actionTypes from "../actions/action-types";

const initialState = {
  Gallery: "",
};

export const GalleryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GALLERY_SUCCESS:
      return updateObject(state, { Gallery: action.payload });
    default:
      return state;
  }
};
