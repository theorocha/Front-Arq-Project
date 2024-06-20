import { useParams } from "react-router-dom";
import EmpresaTemplatePage from "../../../components/empresa/EmpresaTemplatePage";

export default function ServicoContratoPage() {
  const { empresaId } = useParams();

  return (
    <EmpresaTemplatePage empresaId={empresaId}>
      "Meus contratos aqui"
    </EmpresaTemplatePage>
  );
}
