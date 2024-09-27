import axios from "axios";

export const baseURL = "http://localhost:8080";

export function createApi(baseURL) {
  const api = axios.create({ baseURL });
  return api;
}

export function createQueryFetcher(api) {
  return ({ queryKey }) => api(queryKey[0]).then((res) => res.data);
}
