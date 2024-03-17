import { api } from "./request";

const URL_PATH = '/articlesearch.json';

export default {
  fetch: params => api.get(URL_PATH, { params }).then(({ data }) => data)
};
