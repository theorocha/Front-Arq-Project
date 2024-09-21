import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EmptyPanel from "../../../components/geral/EmptyPanel";
import ServicosPrestadosRow from "./ServicosPrestadosRow";

export default function TableServicosPrestados({ servicosPrestados }) {
  console.log(servicosPrestados);

  if (
    servicosPrestados?.length === 0 ||
    servicosPrestados === undefined ||
    servicosPrestados === null
  ) {
    return (
      <EmptyPanel message="Não há serviços prestados registrados nessa empresa." />
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {servicosPrestados?.map((sp) => (
            <ServicosPrestadosRow key={sp.id} sp={sp} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
