import ArticleIcon from "@mui/icons-material/Article";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { List } from "@mui/material";
import React from "react";
import SideBarItem from "./SideBarItem";

export default function Sidebar() {
  //todo -> rota variável...
  const empresaId = 1;

  const menuItems = [
    {
      text: "Clientes",
      icon: PeopleAltIcon,
      to: `/empresa/${empresaId}/clientes`,
    },
    {
      text: "Orçamentos",
      icon: ArticleIcon,
      to: `/empresa/${empresaId}/orcamentos`,
    },
    {
      text: "Obras",
      icon: EngineeringIcon,
      to: `/empresa/${empresaId}/obras`,
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
