import { useParams } from "react-router-dom";

export default function ClientesDaEmpresa() {
  const { empresaId } = useParams();
  return (
    <div className="text-6xl text-red-500">
      Lista de clientes da empresa empresa {empresaId}
    </div>
  );
}
