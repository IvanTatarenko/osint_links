import { BsPeopleFill } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { ReactElement } from "react";
import { TbReportSearch } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi";

export interface MenuItem {
  icon: ReactElement;
  text: string;
  url: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <TbReportSearch />,
    text: "Пошуковики",
    url: "/search-engines",
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
  {
    icon: <HiDocumentText />,
    text: "Допомога",
    url: "/help",
  },
];

export default menuItems;
