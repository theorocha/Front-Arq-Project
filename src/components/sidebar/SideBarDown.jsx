import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { List } from "@mui/material";
import React from "react";
import SideBarDownItem from "./SideBarDownItem";

export default function SideBarDown() {
  const empresaId = 1;

  const menuItems = [
    {
      text: "Serviços prestados",
      icon: MailIcon,
      to: `/empresa/${empresaId}/servicos-prestados`,
    },
    { text: "Serviços extras", icon: InboxIcon, to: "/send-email" },
  ];

  return (
    <List>
      {menuItems.map((item, index) => (
        <SideBarDownItem
          key={index}
          text={item.text}
          icon={item.icon}
          to={item.to}
        />
      ))}
    </List>
  );
}
