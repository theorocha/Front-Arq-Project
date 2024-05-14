import { useEmpresa } from "../../api/empresaAPI";

export default function Empresa() {
  const { data: empresas } = useEmpresa();
  console.log(empresas);

  return <h3>Essa é minha empresa</h3>;
}
