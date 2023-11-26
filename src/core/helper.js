import { Dimensions } from "react-native";

export const getScreenWidth = () => {
  return Dimensions.get("screen").width;
};

export const QueryParam = (params) => {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map((k) => `${esc(k)}=${esc(params[k])}`)
    .join("&");
  return query;
};

export function updateObject(oldObject, updatedValues) {
  return {
    ...oldObject,
    ...updatedValues,
  };
}
