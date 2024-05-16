import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { List } from "@mui/material";
import React from "react";
import SideBarItem from "./SideBarItem";

export default function Sidebar() {
  //todo -> rota variável...
  const menuItems = [
    { text: "Clientes", icon: InboxIcon, to: "/empresa/1/clientes" },
    { text: "Orçamentos", icon: MailIcon, to: "/drafts" },
    { text: "Serviços extras", icon: InboxIcon, to: "/send-email" },
    { text: "Serviços prestados", icon: MailIcon, to: "/starred" },
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
