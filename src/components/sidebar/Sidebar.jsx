import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";
import { List } from "@mui/material";
import React from "react";
import SideBarItem from "./SideBarItem";

export default function Sidebar() {
  //todo -> rota variável...
  const empresaId = 1;

  const menuItems = [
    { text: "Clientes", icon: InboxIcon, to: `/empresa/${empresaId}/clientes` },
    {
      text: "Orçamentos",
      icon: MailIcon,
      to: `/empresa/${empresaId}/clientes`,
    },
    {
      text: "Contratos",
      icon: ArticleIcon,
      to: `/empresa/${empresaId}/servicos-contratos`,
    },
  ];

  return (
    <List>
      {menuItems.map((item, index) => (
        <SideBarItem
          key={index}
          text={item.text}
          icon={item.icon}
          to={item.to}
        />
      ))}
    </List>
  );
}
