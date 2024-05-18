import { useParams } from "react-router-dom";
import { useEmpresaServicosPrestados } from "../../../api/empresaAPI";
import { LinearProgress } from "@mui/material";
import EmpresaTemplatePage from "../../../components/empresa/EmpresaTemplatePage";
import TableServicosPrestados from "./TableServicosPrestados";

export default function ServicosPrestadosDaEmpresaPage() {
  const { empresaId } = useParams();
  const { data: servicosPrestados, isLoading } =
    useEmpresaServicosPrestados(empresaId);
  console.log(servicosPrestados);

  return (
    <EmpresaTemplatePage empresaId={empresaId}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <TableServicosPrestados servicosPrestados={servicosPrestados} />
      )}
    </EmpresaTemplatePage>
  );
}
