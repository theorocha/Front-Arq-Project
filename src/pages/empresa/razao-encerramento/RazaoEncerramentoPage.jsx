import { useParams } from "react-router-dom";
import { useEmpresaRazaoEncerramento } from "../../../api/empresaAPI";
import CrudTabelaBasica from "../../../components/geral/tabelas-basicas/CrudTabelaBasica";

export default function RazaoEncerramentoPage() {
  const { empresaId } = useParams();
  const { data, isLoading } = useEmpresaRazaoEncerramento(empresaId);
  console.log(data);

  return (
    <CrudTabelaBasica
      data={data}
      isLoading={isLoading}
      novoLabel="Nova Razao de encerramento"
      emptyPanelMessage="Não há razões de encerramento de obras registradas nessa empresa."
      empresaId={empresaId}
    />
  );
}
