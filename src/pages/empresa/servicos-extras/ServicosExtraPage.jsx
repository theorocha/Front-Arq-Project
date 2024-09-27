import { useParams } from "react-router-dom";
import { useEmpresaServicosExtras } from "../../../api/empresaAPI";
import CrudTabelaBasica from "../../../components/geral/CrudTabelaBasica";

export default function ServicosExtraPage() {
  const { empresaId } = useParams();
  const { data, isLoading } = useEmpresaServicosExtras(empresaId);

  return (
    <CrudTabelaBasica
      data={data}
      isLoading={isLoading}
      novoLabel="Novo Serviço"
      emptyPanelMessage="Não há serviços extras registrados nessa empresa."
      empresaId={empresaId}
    />
  );
}
