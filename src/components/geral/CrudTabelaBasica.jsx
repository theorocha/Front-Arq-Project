import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EmpresaTemplatePage from "../empresa/EmpresaTemplatePage";
import EmptyPanel from "./EmptyPanel";

export default function CrudTabelaBasica({
  data,
  isLoading,
  novoLabel,
  emptyPanelMessage,
  empresaId,
  deleteCommand,
  editCommand,
  novoCommand,
}) {
  const commands = [
    novoCommand && (
      <novoCommand.type {...novoCommand.props} novoLabel={novoLabel} />
    ),
  ];

  return (
    <EmpresaTemplatePage empresaId={empresaId} commands={commands}>
      {isLoading ? (
        <LinearProgress />
      ) : data?.length === 0 || data === undefined || data === null ? (
        <EmptyPanel message={emptyPanelMessage} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <TableRow key={item?.id}>
                  <TableCell>
                    <Typography variant="body2">{item?.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{item.descricao}</Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      margin: "0",
                      padding: "0",
                    }}
                    align="right"
                  >
                    <>
                      {editCommand && (
                        <editCommand.type {...editCommand.props} item={item} />
                      )}
                      {deleteCommand && (
                        <deleteCommand.type
                          {...deleteCommand.props}
                          item={item}
                        />
                      )}
                    </>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </EmpresaTemplatePage>
  );
}
