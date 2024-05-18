import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EmptyPanel from "../../../components/geral/EmptyPanel";

export default function TableServicosPrestados({ servicosPrestados }) {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {servicosPrestados?.map((sp) => (
            <TableRow key={sp.id}>
              <TableCell>
                <Typography variant="body2">{sp?.id}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{sp?.descricao}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
