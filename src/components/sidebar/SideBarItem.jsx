import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBarItem({ text, icon: Icon, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={to}
        sx={{
          bgcolor: isActive ? "rgba(0, 0, 0, 0.1)" : "inherit",
        }}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
