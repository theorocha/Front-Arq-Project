import { useParams } from "react-router-dom";
import { useEmpresaServicosExtras } from "../../../api/empresaAPI";
import CrudTabelaBasica from "../../../components/geral/tabelas-basicas/CrudTabelaBasica";

export default function ServicosExtraPage() {
  const { empresaId } = useParams();
  const { data, isLoading } = useEmpresaServicosExtras(empresaId);
  console.log(data);

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
