import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createApi, createQueryFetcher } from "./apiConfig";

const baseURL = "http://localhost:8080";
export const api = createApi(baseURL);
const queryFn = createQueryFetcher(api);
//let ultimaQuery = "";

export function useServicoExtra() {
  return useQuery({
    queryKey: [`/api/servico-extra`],
    queryFn,
  });
}
