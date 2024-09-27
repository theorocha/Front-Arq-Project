import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ExcluirStatusOrcamentoCommand({ item }) {
  return (
    <Tooltip title="Excluir serviço">
      <Button
        variant="outlined"
        size="small"
        sx={{ marginRight: "0.5rem" }}
        color="error"
        // onClick={() => handleExcluir(item)}
      >
        <DeleteIcon />
      </Button>
    </Tooltip>
  );
}
