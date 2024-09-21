import { useParams } from "react-router-dom";
import EmpresaTemplatePage from "../../../components/empresa/EmpresaTemplatePage";

export default function ObrasPage() {
  const { empresaId } = useParams();

  return (
    <EmpresaTemplatePage empresaId={empresaId}>
      "Minhas obras aqui"
    </EmpresaTemplatePage>
  );
}
