import { useParams } from "react-router-dom";
import { useEmpresaStatusServico } from "../../../api/empresaAPI";
import CrudTabelaBasica from "../../../components/geral/CrudTabelaBasica";
import ExcluirStatusServicoCommand from "./ExcluirStatusServicoCommand";

export default function StatusServicoPage() {
  const { empresaId } = useParams();
  const { data, isLoading } = useEmpresaStatusServico(empresaId);

  return (
    <CrudTabelaBasica
      data={data}
      isLoading={isLoading}
      novoLabel="Novo Status"
      deleteCommand={<ExcluirStatusServicoCommand />}
      emptyPanelMessage="Não há status dos serviços das obras registrados nessa empresa."
      empresaId={empresaId}
    />
  );
}
