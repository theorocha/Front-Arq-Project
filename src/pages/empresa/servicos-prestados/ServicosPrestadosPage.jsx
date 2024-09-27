import { useParams } from "react-router-dom";
import { useEmpresaServicosPrestados } from "../../../api/empresaAPI";
import ExcluirServicoPrestadoCommand from "./ExcluirServicoPrestadoCommand";
import EditarServicoPrestadoCommand from "./EditarServicoPrestadoCommand";
import NovoServicoPrestadoCommand from "./NovoServicoPrestadoCommand";
import CrudTabelaBasica from "../../../components/geral/CrudTabelaBasica";

export default function ServicosPrestadosPage() {
  const { empresaId } = useParams();
  const { data, isLoading } = useEmpresaServicosPrestados(empresaId);

  return (
    <CrudTabelaBasica
      data={data}
      isLoading={isLoading}
      novoLabel="Novo Serviço"
      emptyPanelMessage="Não há serviços registrados nessa empresa."
      empresaId={empresaId}
      deleteCommand={<ExcluirServicoPrestadoCommand />}
      editCommand={<EditarServicoPrestadoCommand />}
      novoCommand={<NovoServicoPrestadoCommand novoLabel="Novo Serviço" />}
    />
  );
}
