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
import ServicoContratoPage from "./pages/empresa/servicos-contratos/ServicoContratoPage";

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
    path: "/empresa/:empresaId/servicos-prestados",
    element: <ServicosPrestadosDaEmpresaPage />,
  },
  {
    path: "/empresa/:empresaId/servicos-contratos",
    element: <ServicoContratoPage />,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
