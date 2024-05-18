import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ClienteRow from "./ClienteRow";
import EmptyPanel from "../../../components/geral/EmptyPanel";

export default function TableClientes({ clientes }) {
  if (clientes?.length === 0 || clientes === undefined || clientes === null) {
    return <EmptyPanel message="Não há clientes registrados nessa empresa." />;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "5px" }}></TableCell>
            <TableCell>Id</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Celular</TableCell>
            <TableCell>Cep</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes?.map((cliente) => (
            <ClienteRow key={cliente.id} cliente={cliente} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
