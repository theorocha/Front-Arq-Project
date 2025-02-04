import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseURL, createApi } from "./apiConfig";

export const api = createApi(baseURL);

export function useExcluirServicoExtra() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, empresaId }) =>
      api.delete(`/api/servico-extra/${id}/empresa/${empresaId}`),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/servicos-extras`
        );
      },
    }
  );
}

export function useNovoServicoExtra() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ servico, empresaId }) =>
      api.post(`/api/servico-extra/empresa/${empresaId}`, servico),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/servico-extra`
        );
      },
    }
  );
}
