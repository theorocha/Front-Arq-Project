import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseURL, createApi } from "./apiConfig";

export const api = createApi(baseURL);

export function useExcluirServicoPrestado() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, empresaId }) =>
      api.delete(`/api/servico-prestado/${id}/empresa/${empresaId}`),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/servicos-prestados`
        );
      },
    }
  );
}

export function useNovoServicoPrestado() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ servico, empresaId }) =>
      api.post(`/api/servico-prestado/empresa/${empresaId}`, servico),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(
          `/api/empresa/${empresaId}/servico-prestado`
        );
      },
    }
  );
}
