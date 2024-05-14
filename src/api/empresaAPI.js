import { useQuery } from "@tanstack/react-query";
import { createApi, createQueryFetcher } from "./apiConfig";

const baseURL = "http://localhost:8080";
export const api = createApi(baseURL);
const queryFn = createQueryFetcher(api);

export function useEmpresa() {
  return useQuery({
    queryKey: [`/api/empresa`],
    queryFn,
  });
}
