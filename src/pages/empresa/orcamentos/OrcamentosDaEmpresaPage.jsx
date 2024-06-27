import { useParams } from "react-router-dom";
import EmpresaTemplatePage from "../../../components/empresa/EmpresaTemplatePage";
import { LinearProgress } from "@mui/material";
import { useEmpresaOrcamentos } from "../../../api/empresaAPI";
import TableOrcamentos from "./TableOrcamentos";

export default function OrcamentosDaEmpresaPage() {
  const { empresaId } = useParams();
  const { data: orcamentos, isLoading } = useEmpresaOrcamentos(empresaId);

  return (
    <EmpresaTemplatePage empresaId={empresaId}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <TableOrcamentos orcamentos={orcamentos} />
      )}
    </EmpresaTemplatePage>
  );
}
