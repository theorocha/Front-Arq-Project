import { Button, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditarClienteCommand({ cliente }) {
  return (
    <Tooltip title="Excluir Cliente">
      <Button
        variant="outlined"
        size="small"
        sx={{ marginRight: "0.5rem" }}
        // className={`${btnClasses.miniButton} ${btnClasses.dangerButton}`}
        // onClick={() => handleExcluir(falta)}
      >
        <EditIcon />
      </Button>
    </Tooltip>
  );
}
