import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ExcluirServicoPrestadoCommand({ sp }) {
  return (
    <Tooltip title="Excluir Cliente">
      <Button
        variant="outlined"
        size="small"
        sx={{ marginRight: "0.5rem" }}
        color="error"
        //onClick={() => handleExcluir(sp)}
      >
        <DeleteIcon />
      </Button>
    </Tooltip>
  );
}
