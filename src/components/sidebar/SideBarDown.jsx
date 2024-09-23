import DesignServicesIcon from "@mui/icons-material/DesignServices";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { List } from "@mui/material";
import React from "react";
import SideBarDownItem from "./SideBarDownItem";

export default function SideBarDown() {
  const empresaId = 1;

  const menuItems = [
    {
      text: "Serviços prestados",
      icon: DesignServicesIcon,
      to: `/empresa/${empresaId}/servicos-prestados`,
    },
    {
      text: "Serviços extras",
      icon: MapsUgcIcon,
      to: `/empresa/${empresaId}/servicos-extras`,
    },
    {
      text: "Status serviço",
      icon: ListAltIcon,
      to: `/empresa/${empresaId}/status-servico`,
    },
    {
      text: "Status orçamento",
      icon: ListAltIcon,
      to: `/empresa/${empresaId}/status-orcamento`,
    },
    {
      text: "Razão encerramento",
      icon: DoNotDisturbAltIcon,
      to: `/empresa/${empresaId}/razoes-encerramento`,
    },
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
