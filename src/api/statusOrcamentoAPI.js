import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createApi, createQueryFetcher, baseURL } from "./apiConfig";

export const api = createApi(baseURL);
const queryFn = createQueryFetcher(api);

export function useExcluirStatusOrcamento() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, empresaId }) =>
      api.delete(`/api/status-orcamento/${id}/empresa/${empresaId}`),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/status-orcamento`
        );
      },
    }
  );
}
