import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Grid,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Dado from "../../../components/geral/Dado";
import ExcluirClienteCommand from "./ExcluirClienteCommand";
import EditarClienteCommand from "./EditarClienteCommand";

export default function ClienteRow({ cliente }) {
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
          <Typography variant="body2">{cliente?.id}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{cliente?.cpf}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{cliente?.nome}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{cliente?.email}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{cliente?.celular}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{cliente?.endereco?.cep}</Typography>
        </TableCell>
        <TableCell
          sx={{
            margin: "0",
            padding: "0",
          }}
          align="right"
        >
          <>
            <EditarClienteCommand cliente={cliente} />
            <ExcluirClienteCommand cliente={cliente} />
          </>
        </TableCell>
      </TableRow>
      {expanded && (
        <TableRow>
          <TableCell colSpan={12}>
            <Grid container>
              <Grid item xs={12} marginLeft={"6rem"}>
                <Dado
                  label="Endereço"
                  value={[
                    cliente?.endereco?.logradouro,
                    cliente?.endereco?.numero,
                    cliente?.endereco?.complemento,
                    cliente?.endereco?.bairro,
                    cliente?.endereco?.estado,
                    cliente?.endereco?.pais,
                  ]
                    .filter(Boolean)
                    .join(" - ")}
                />
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
