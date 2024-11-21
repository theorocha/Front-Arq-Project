import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseURL, createApi } from "./apiConfig";

export const api = createApi(baseURL);

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

export function useNovoStatusOrcamento() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ status, empresaId }) =>
      api.post(`/api/status-orcamento/empresa/${empresaId}`, status),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/status-orcamento`
        );
      },
    }
  );
}
