import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Tooltip, Typography } from "@mui/material";
import { useDialog } from "muibox";
import useFeedback from "../../../components/geral/useFeedback";
import { useExcluirClienteEmpresa } from "../../../api/empresaAPI";
import { useParams } from "react-router-dom";

export default function ExcluirClienteCommand({ cliente }) {
  const { empresaId } = useParams();
  const dialog = useDialog();
  const { showSuccess, showError } = useFeedback();
  const excluirCliente = useExcluirClienteEmpresa();

  async function handleExcluir(cliente) {
    try {
      await dialog.confirm({
        message: (
          <>
            <Typography variant="h6">
              Deseja excluir {cliente.nome} da sua lista de clientes?
            </Typography>
            <Typography style={{ marginTop: "1rem" }}>
              ATENÇÃO: Esta ação não poderá ser desfeita.
            </Typography>
          </>
        ),
        ok: { text: "EXCLUIR", color: "error" },
        cancel: { text: "CANCELAR", color: "primary" },
      });
      try {
        excluirCliente.mutate(
          {
            empresaId: empresaId,
            clienteId: cliente.id,
          },

          {
            onError: showError,
            onSuccess: () => {
              showSuccess("Cliente deletado com sucesso");
            },
          }
        );
      } catch (error) {
        showError(error);
      }
    } catch (error) {}
  }
  return (
    <Tooltip title="Excluir Cliente">
      <Button
        variant="outlined"
        size="small"
        sx={{ marginRight: "0.5rem" }}
        color="error"
        onClick={() => handleExcluir(cliente)}
      >
        <DeleteIcon />
      </Button>
    </Tooltip>
  );
}
