import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ClientesDaEmpresa from "./pages/empresa/ClientesDaEmpresa";
import NotFoundPage from "./pages/NotFoundPage";
import DadosCliente from "./pages/cliente/DadosCliente";

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
    path: "/*",
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
