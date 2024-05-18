import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Tooltip } from "@mui/material";

export default function ExcluirClienteCommand({ cliente }) {
  return (
    <Tooltip title="Excluir Cliente">
      <Button
        variant="outlined"
        size="small"
        sx={{ marginRight: "0.5rem" }}
        // className={`${btnClasses.miniButton} ${btnClasses.dangerButton}`}
        // onClick={() => handleExcluir(falta)}
      >
        <DeleteIcon />
      </Button>
    </Tooltip>
  );
}
