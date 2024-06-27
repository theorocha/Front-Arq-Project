import { useParams } from "react-router-dom";
import EmpresaTemplatePage from "../../../components/empresa/EmpresaTemplatePage";
import { useEmpresaClientes } from "../../../api/empresaAPI";
import { Button, LinearProgress } from "@mui/material";
import TableClientes from "./TableClientes";

export default function ClientesDaEmpresaPage() {
  const { empresaId } = useParams();
  const { data: clientes, isLoading } = useEmpresaClientes(empresaId);
  const commands = [<Button variant="contained">Novo cliente</Button>];

  return (
    <EmpresaTemplatePage empresaId={empresaId} commands={commands}>
      {isLoading ? <LinearProgress /> : <TableClientes clientes={clientes} />}
    </EmpresaTemplatePage>
  );
}
