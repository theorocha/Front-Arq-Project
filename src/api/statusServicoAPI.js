import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseURL, createApi } from "./apiConfig";

export const api = createApi(baseURL);

export function useExcluirStatusServico() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, empresaId }) =>
      api.delete(`/api/status-servico/${id}/empresa/${empresaId}`),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/status-servico`
        );
      },
    }
  );
}

export function useNovoStatusServico() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ status, empresaId }) =>
      api.post(`/api/status-servico/empresa/${empresaId}`, status),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/status-servico`
        );
      },
    }
  );
}
