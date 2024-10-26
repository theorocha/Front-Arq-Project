import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseURL, createApi } from "./apiConfig";

export const api = createApi(baseURL);

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

export function useNovaRazaoEncerramento() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ razao, empresaId }) =>
      api.post(`/api/razao-encerramento/empresa/${empresaId}`, razao),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/razao-encerramento`
        );
      },
    }
  );
}
