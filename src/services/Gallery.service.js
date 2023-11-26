import { QueryParam } from "../core/helper";
import { API } from "./api";

export const getGalleryServices = function (payload) {
  return API.get(`/rest/?${QueryParam(payload)}`);
};
