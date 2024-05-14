import axios from "axios";

export function createApi(baseURL) {
  const api = axios.create({ baseURL });
  return api;
}

export function createQueryFetcher(api) {
  return ({ queryKey }) => api(queryKey[0]).then((res) => res.data);
}
