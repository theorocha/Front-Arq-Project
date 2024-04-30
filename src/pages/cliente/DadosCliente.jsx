import { useParams } from "react-router-dom";

export default function DadosCliente() {
  const { clienteId } = useParams();
  return (
    <h3>
      Olá, esses sao meus dados! <br /> Sou o cliente {clienteId}
    </h3>
  );
}
