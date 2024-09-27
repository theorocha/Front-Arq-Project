import { Button, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditarStatusOrcamentoCommand({ sp }) {
  return (
    <Tooltip title="Editar Serviço">
      <Button
        variant="outlined"
        size="small"
        sx={{ marginRight: "0.5rem" }}
        // onClick={() => handleExcluir(falta)}
      >
        <EditIcon />
      </Button>
    </Tooltip>
  );
}
