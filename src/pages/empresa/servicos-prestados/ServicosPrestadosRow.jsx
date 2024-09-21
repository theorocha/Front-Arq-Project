import { TableCell, TableRow, Typography } from "@mui/material";
import EditarServicoPrestadoCommand from "./EditarServicoPrestadoCommand";
import ExcluirServicoPrestadoCommand from "./ExcluirServicoPrestadoCommand";

export default function ServicosPrestadosRow({ key, sp }) {
  return (
    <TableRow key={key}>
      <TableCell>
        <Typography variant="body2">{sp?.id}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{sp.descricao}</Typography>
      </TableCell>

      <TableCell
        sx={{
          margin: "0",
          padding: "0",
        }}
        align="right"
      >
        <>
          <EditarServicoPrestadoCommand sp={sp} />
          <ExcluirServicoPrestadoCommand sp={sp} />
        </>
      </TableCell>
    </TableRow>
  );
}
