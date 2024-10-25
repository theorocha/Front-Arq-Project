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
