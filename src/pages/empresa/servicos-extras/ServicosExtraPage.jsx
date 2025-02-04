import { useParams } from "react-router-dom";
import { useEmpresaServicosExtras } from "../../../api/empresaAPI";
import CrudTabelaBasica from "../../../components/geral/CrudTabelaBasica";
import ExcluirServicoExtraCommand from "./ExcluirServicoExtraCommand";
import NovoServicoExtraCommand from "./NovoServicoExtraCommand";

export default function ServicosExtraPage() {
  const { empresaId } = useParams();
  const { data, isLoading } = useEmpresaServicosExtras(empresaId);

  return (
    <CrudTabelaBasica
      data={data}
      isLoading={isLoading}
      deleteCommand={<ExcluirServicoExtraCommand />}
      emptyPanelMessage="Não há serviços extras registrados nessa empresa."
      novoCommand={<NovoServicoExtraCommand novoLabel="Novo Serviço" />}
      empresaId={empresaId}
    />
  );
}
