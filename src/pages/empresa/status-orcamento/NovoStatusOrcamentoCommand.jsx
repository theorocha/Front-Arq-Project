import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import useFeedback from "../../../components/geral/useFeedback";
import { useNovoStatusOrcamento } from "../../../api/statusOrcamentoAPI.js";

export default function NovoStatusOrcamentoCommand({ novoLabel, empresaId }) {
  const [descricao, setDescricao] = useState("");
  const [open, setOpen] = useState(false);
  const { showSuccess, showError } = useFeedback();
  const novoStatus = useNovoStatusOrcamento();

  function handleClose() {
    setOpen(false);
    setDescricao("");
  }

  function handleOpen() {
    setOpen(true);
  }
  async function submit(event) {
    event.preventDefault();

    try {
      const _status = { descricao: descricao };

      novoStatus.mutate(
        {
          status: _status,
          empresaId: empresaId,
        },
        {
          onError: showError,
          onSuccess: () => {
            showSuccess("Status criado com sucesso.");
            handleClose();
          },
        }
      );
    } catch (error) {
      showError(error);
    }
  }

  return (
    <>
      <Tooltip title={novoLabel}>
        <Button variant="outlined" size="small" onClick={handleOpen}>
          {novoLabel}
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <form onSubmit={submit}>
          <DialogTitle>{novoLabel}</DialogTitle>
          <DialogContent style={{ paddingTop: 20 }}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Descrição"
                required
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Cadastrar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
