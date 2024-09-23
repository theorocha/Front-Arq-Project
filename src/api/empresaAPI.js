import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createApi, createQueryFetcher } from "./apiConfig";

const baseURL = "http://localhost:8080";
export const api = createApi(baseURL);
const queryFn = createQueryFetcher(api);
let ultimaQuery = "";

export function useEmpresa() {
  return useQuery({
    queryKey: [`/api/empresa`],
    queryFn,
  });
}

export function useEmpresaById(empresaId) {
  return useQuery({
    queryKey: [`/api/empresa/${empresaId}`],
    queryFn,
  });
}

export function useEmpresaClientes(empresaId) {
  ultimaQuery = `/api/empresa/${empresaId}/clientes`;
  return useQuery({
    queryKey: [ultimaQuery],
    queryFn,
  });
}

export function useNovoClienteEmpresa() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ cliente, empresaId }) =>
      api.post(`/api/empresa/${empresaId}/cliente`, cliente),
    {
      onSuccess: ({ empresaId }) => {
        queryClient.invalidateQueries(`/api/empresa/${empresaId}/clientes`);
      },
    }
  );
}

export function useExcluirClienteEmpresa() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ empresaId, clienteId }) =>
      api.delete(`/api/empresa/${empresaId}/cliente/${clienteId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ultimaQuery);
      },
    }
  );
}
export function useEmpresaOrcamentos(empresaId) {
  return useQuery({
    queryKey: [`/api/empresa/${empresaId}/orcamentos`],
    queryFn,
  });
}

export function useEmpresaServicosPrestados(empresaId) {
  return useQuery({
    queryKey: [`/api/empresa/${empresaId}/servicos-prestados`],
    queryFn,
  });
}

export function useEmpresaServicosExtras(empresaId) {
  return useQuery({
    queryKey: [`/api/empresa/${empresaId}/servicos-extras`],
    queryFn,
  });
}

export function useEmpresaRazaoEncerramento(empresaId) {
  return useQuery({
    queryKey: [`/api/empresa/${empresaId}/razao-encerramento`],
    queryFn,
  });
}
