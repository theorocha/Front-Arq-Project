import { useParams } from "react-router-dom";
import { useEmpresaRazaoEncerramento } from "../../../api/empresaAPI";
import CrudTabelaBasica from "../../../components/geral/CrudTabelaBasica";
import ExcluirRazaoEncerramento from "./ExcluirRazaoEncerramento";
import NovaRazaoEncerramento from "./NovaRazaoEncerramento";

export default function RazaoEncerramentoPage() {
  const { empresaId } = useParams();
  const { data, isLoading } = useEmpresaRazaoEncerramento(empresaId);

  return (
    <CrudTabelaBasica
      data={data}
      isLoading={isLoading}
      emptyPanelMessage="Não há razões de encerramento de obras registradas nessa empresa."
      empresaId={empresaId}
      deleteCommand={<ExcluirRazaoEncerramento />}
      novoCommand={<NovaRazaoEncerramento novoLabel="Nova razão" />}
    />
  );
}
