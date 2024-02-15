import { BsPeopleFill } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { ReactElement } from "react";
import { TbReportSearch } from "react-icons/tb";

export interface MenuItem {
  icon: ReactElement;
  text: string;
  url: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <TbReportSearch />,
    text: "Дорки",
    url: "/dorks",
  },
  {
    icon: <BsPeopleFill />,
    text: "Люди",
    url: "/people",
  },
  {
    icon: <FaBuildingColumns />,
    text: "Компанії",
    url: "/company",
  },
];

export default menuItems;
