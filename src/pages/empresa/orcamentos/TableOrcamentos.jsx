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
import OrcamentoRow from "./OrcamentoRow";

export default function TableOrcamentos({ orcamentos }) {
  if (
    orcamentos?.length === 0 ||
    orcamentos === undefined ||
    orcamentos === null
  ) {
    return (
      <EmptyPanel message="Não há orcamentos registrados nessa empresa." />
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "5px" }}></TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Descricao</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Data envio</TableCell>
            <TableCell>Validade</TableCell>
            <TableCell>Observação</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orcamentos?.map((orcamento) => (
            <OrcamentoRow key={orcamento.id} orcamento={orcamento} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
