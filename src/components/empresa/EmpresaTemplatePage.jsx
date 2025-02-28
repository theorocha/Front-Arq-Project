import { Typography, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useEmpresaById } from "../../api/empresaAPI";
import SideBarDown from "../sidebar/SideBarDown";
import Sidebar from "../sidebar/Sidebar";

const drawerWidth = 250;

export default function EmpresaTemplatePage({
  children,
  empresaId,
  commands = [],
}) {
  const { data: empresa } = useEmpresaById(empresaId);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {empresa?.nome}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Sidebar />
        <Divider />
        <SideBarDown />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          paddingTop: `calc(64px + 16px)`, // Ajusta o espaçamento acima do conteúdo principal
        }}
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="flex-end"
        >
          {commands.map((command, index) => (
            <Grid item key={index}>
              {command}
            </Grid>
          ))}
        </Grid>
        <Box mt={3}>{children}</Box>
      </Box>
    </Box>
  );
}
