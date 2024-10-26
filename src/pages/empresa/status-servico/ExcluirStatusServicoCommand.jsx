import { Button, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDialog } from "muibox";
import useFeedback from "../../../components/geral/useFeedback";
import { useExcluirStatusServico } from "../../../api/statusServicoAPI";

export default function ExcluirStatusServicoCommand({ item, empresaId }) {
  const dialog = useDialog();
  const { showSuccess, showError } = useFeedback();
  const excluirStatus = useExcluirStatusServico();

  async function handleExcluir(item) {
    try {
      await dialog.confirm({
        message: (
          <>
            <Typography variant="h6">
              Deseja excluir "{item.descricao}" da sua lista de status?
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
        excluirStatus.mutate(
          {
            empresaId: empresaId,
            id: item.id,
          },

          {
            onError: (error) => {
              const errorMessage =
                error.response?.data?.message ||
                "Erro ao tentar excluir o status";
              showError(errorMessage);
            },
            onSuccess: () => {
              showSuccess("Status deletado com sucesso.");
            },
          }
        );
      } catch (error) {
        showError(error);
      }
    } catch (error) {}
  }
  return (
    <Tooltip title="Excluir Status">
      <Button
        variant="outlined"
        size="small"
        sx={{ marginRight: "0.5rem" }}
        color="error"
        onClick={() => handleExcluir(item)}
      >
        <DeleteIcon />
      </Button>
    </Tooltip>
  );
}
