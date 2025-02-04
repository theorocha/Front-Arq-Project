import {
  Box,
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

export default function NovoClienteCommand({ novoLabel, empresaId }) {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");

  function handleClose() {
    setOpen(false);
    setNome("");
    setCpf("");
    setEmail("");
    setCelular("");
    setLogradouro("");
    setBairro("");
    setNumero("");
    setComplemento("");
    setCep("");
    setPais("");
    setEstado("");
  }

  function handleOpen() {
    setOpen(true);
  }
  return (
    <>
      <Tooltip title={novoLabel}>
        <Button variant="outlined" size="small" onClick={handleOpen}>
          {novoLabel}
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <form
        //  onSubmit={submit}
        >
          <DialogTitle>{novoLabel}</DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              {/* att pro mui2 pra usar grid 2 */}
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  label="Nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  inputProps={{ maxLength: 100 }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Registrar cliente
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
