import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { formataData } from "../../../shared/formatadores";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function OrcamentoRow({ orcamento }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton onClick={handleExpandClick}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{orcamento?.id}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{orcamento?.descricao}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{`R$${orcamento?.valorContrato},00`}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">
            {formataData(orcamento?.dataEnvio)}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">
            {formataData(orcamento?.dataValidade)}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{orcamento?.observacao}</Typography>
        </TableCell>
        <TableCell
          sx={{
            margin: "0",
            padding: "0",
          }}
          align="right"
        >
          {/* <>
            <EditarClienteCommand cliente={cliente} />
            <ExcluirClienteCommand cliente={cliente} />
          </> */}
        </TableCell>
      </TableRow>
    </>
  );
}
