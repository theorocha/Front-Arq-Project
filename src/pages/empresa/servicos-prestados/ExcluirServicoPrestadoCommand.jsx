import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Tooltip, Typography } from "@mui/material";
import { useDialog } from "muibox";
import { useExcluirServicoPrestado } from "../../../api/servicoPrestadoAPI";
import useFeedback from "../../../components/geral/useFeedback";

export default function ExcluirServicoPrestadoCommand({ item, empresaId }) {
  const dialog = useDialog();
  const { showSuccess, showError } = useFeedback();
  const excluirServico = useExcluirServicoPrestado();

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
        excluirServico.mutate(
          {
            empresaId: empresaId,
            id: item.id,
          },

          {
            onError: (error) => {
              const errorMessage =
                error.response?.data?.message ||
                "Erro ao tentar excluir o serviço";
              showError(errorMessage);
            },
            onSuccess: () => {
              showSuccess("Serviço deletado com sucesso.");
            },
          }
        );
      } catch (error) {
        showError(error);
      }
    } catch (error) {}
  }
  return (
    <Tooltip title="Excluir Serviço">
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
