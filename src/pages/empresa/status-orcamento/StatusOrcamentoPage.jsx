import { useParams } from "react-router-dom";
import { useEmpresaStatusOrcamento } from "../../../api/empresaAPI";
import CrudTabelaBasica from "../../../components/geral/CrudTabelaBasica";
import ExcluirStatusOrcamentoCommand from "./ExcluirStatusOrcamentoCommand";
import NovoStatusOrcamentoCommand from "./NovoStatusOrcamentoCommand";

export default function StatusOrcamentoPage() {
  const { empresaId } = useParams();
  const { data, isLoading } = useEmpresaStatusOrcamento(empresaId);

  return (
    <CrudTabelaBasica
      data={data}
      isLoading={isLoading}
      novoLabel="Novo Status"
      emptyPanelMessage="Não há status de orçamentos registrados nessa empresa."
      empresaId={empresaId}
      deleteCommand={<ExcluirStatusOrcamentoCommand />}
      novoCommand={<NovoStatusOrcamentoCommand novoLabel="Novo Status" />}
    />
  );
}
