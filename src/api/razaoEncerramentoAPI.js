import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createApi, createQueryFetcher, baseURL } from "./apiConfig";

export const api = createApi(baseURL);
const queryFn = createQueryFetcher(api);

export function useExcluirRazaoEncerramento() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, empresaId }) =>
      api.delete(`/api/razao-encerramento/${id}/empresa/${empresaId}`),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/razao-encerramento`
        );
      },
    }
  );
}
