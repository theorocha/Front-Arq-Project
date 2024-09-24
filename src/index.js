import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import DadosCliente from "./pages/cliente/DadosCliente";
import ClientesDaEmpresaPage from "./pages/empresa/clientes/ClientesDaEmpresaPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicosPrestadosDaEmpresaPage from "./pages/empresa/servicos-prestados/ServicosPrestadosDaEmpresaPage";
import OrcamentosDaEmpresaPage from "./pages/empresa/orcamentos/OrcamentosDaEmpresaPage";
import { SnackbarProvider } from "notistack";
import { DialogProvider } from "muibox";
import ObrasPage from "./pages/empresa/obras/ObrasPage";
import ServicosExtraPage from "./pages/empresa/servicos-extras/ServicosExtraPage";
import RazaoEncerramentoPage from "./pages/empresa/razao-encerramento/RazaoEncerramentoPage";
import StatusServicoPage from "./pages/empresa/status-servico/StatusServicoPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/empresa/:empresaId/clientes",
    element: <ClientesDaEmpresaPage />,
  },
  {
    path: "/empresa/:empresaId/orcamentos",
    element: <OrcamentosDaEmpresaPage />,
  },
  {
    path: "/empresa/:empresaId/servicos-prestados",
    element: <ServicosPrestadosDaEmpresaPage />,
  },
  {
    path: "/empresa/:empresaId/servicos-extras",
    element: <ServicosExtraPage />,
  },
  {
    path: "/empresa/:empresaId/razoes-encerramento",
    element: <RazaoEncerramentoPage />,
  },
  {
    path: "/empresa/:empresaId/status-servico",
    element: <StatusServicoPage />,
  },
  {
    path: "/empresa/:empresaId/obras",
    element: <ObrasPage />,
  },
  {
    path: "/cliente/:clienteId",
    element: <DadosCliente />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={1}>
      <DialogProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </DialogProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
