import { useParams } from "react-router-dom";
import EmpresaTemplatePage from "../../../components/empresa/EmpresaTemplatePage";
import { useEmpresaClientes } from "../../../api/empresaAPI";
import { LinearProgress } from "@mui/material";
import TableClientes from "./TableClientes";

export default function ClientesDaEmpresaPage() {
  const { empresaId } = useParams();
  const { data: clientes, isLoading } = useEmpresaClientes(empresaId);

  return (
    <EmpresaTemplatePage empresaId={empresaId}>
      {isLoading ? <LinearProgress /> : <TableClientes clientes={clientes} />}
    </EmpresaTemplatePage>
  );
}
