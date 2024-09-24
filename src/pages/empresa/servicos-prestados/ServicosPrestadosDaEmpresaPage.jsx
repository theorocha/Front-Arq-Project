import { useParams } from "react-router-dom";
import { useEmpresaServicosPrestados } from "../../../api/empresaAPI";
import { Button, LinearProgress } from "@mui/material";
import EmpresaTemplatePage from "../../../components/empresa/EmpresaTemplatePage";
import TableServicosPrestados from "./TableServicosPrestados";

export default function ServicosPrestadosDaEmpresaPage() {
  const { empresaId } = useParams();
  const { data: servicosPrestados, isLoading } =
    useEmpresaServicosPrestados(empresaId);
  const commands = [<Button variant="contained">Novo serviço</Button>];

  return (
    <EmpresaTemplatePage empresaId={empresaId} commands={commands}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <TableServicosPrestados servicosPrestados={servicosPrestados} />
      )}
    </EmpresaTemplatePage>
  );
}
