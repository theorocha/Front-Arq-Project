import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ClienteRow from "./ClienteRow";

export default function TableClientes({ clientes }) {
  console.log(clientes);

  return (
    <Table component={Paper}>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Id</TableCell>
          <TableCell>CPF</TableCell>
          <TableCell>Nome</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Celular</TableCell>
          <TableCell>Cep</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clientes.map((cliente) => (
          <ClienteRow key={cliente.id} cliente={cliente} />
        ))}
      </TableBody>
    </Table>
  );
}
