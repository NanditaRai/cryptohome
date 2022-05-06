import { APIS } from "../../config";

export const getListItems = async (pageNum) => {
  const response = await fetch(
    `"${APIS.list.url}&page=${pageNum}"`,
    APIS.list.options
  );

  const resp = await response.json();

  return resp;
};
