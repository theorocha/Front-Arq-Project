import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";

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
        <TableCell>{cliente?.id}</TableCell>
        <TableCell>{cliente?.cpf}</TableCell>
        <TableCell>{cliente?.nome}</TableCell>
        <TableCell>{cliente?.email}</TableCell>
        <TableCell>{cliente?.celular}</TableCell>
        <TableCell>{cliente?.endereco?.cep}</TableCell>
      </TableRow>
      {expanded && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Typography
              variant="body2"
              style={{ padding: "20px 16px", border: "none" }}
            >
              {[
                cliente?.endereco?.logradouro,
                cliente?.endereco?.numero,
                cliente?.endereco?.complemento,
                cliente?.endereco?.bairro,
                cliente?.endereco?.estado,
                cliente?.endereco?.pais,
              ]
                .filter(Boolean)
                .join(" - ")}
            </Typography>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
