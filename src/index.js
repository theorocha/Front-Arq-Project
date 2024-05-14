import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ClientesDaEmpresa from "./pages/empresa/ClientesDaEmpresa";
import NotFoundPage from "./pages/NotFoundPage";
import DadosCliente from "./pages/cliente/DadosCliente";
import Empresa from "./pages/empresa/Empresa";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/empresa/clientes",
    element: <ClientesDaEmpresa />,
  },
  {
    path: "/cliente/:clienteId",
    element: <DadosCliente />,
  },
  {
    path: "/empresa",
    element: <Empresa />,
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
