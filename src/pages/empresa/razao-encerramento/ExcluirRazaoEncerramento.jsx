import { Button, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDialog } from "muibox";
import useFeedback from "../../../components/geral/useFeedback";
import { useExcluirRazaoEncerramento } from "../../../api/razaoEncerramentoAPI";

export default function ExcluirRazaoEncerramento({ item, empresaId }) {
  const dialog = useDialog();
  const { showSuccess, showError } = useFeedback();
  const excluirRazao = useExcluirRazaoEncerramento();

  async function handleExcluir(item) {
    try {
      await dialog.confirm({
        message: (
          <>
            <Typography variant="h6">
              Deseja excluir {item.descricao} da sua lista de razões?
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
        excluirRazao.mutate(
          {
            empresaId: empresaId,
            id: item.id,
          },

          {
            onError: (error) => {
              const errorMessage =
                error.response?.data?.message ||
                "Erro ao tentar excluir a razão";
              showError(errorMessage);
            },
            onSuccess: () => {
              showSuccess("Razão deletada com sucesso.");
            },
          }
        );
      } catch (error) {
        showError(error);
      }
    } catch (error) {}
  }
  return (
    <Tooltip title="Excluir Razão">
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
