import { BsPeopleFill } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { ReactElement } from 'react';

export interface MenuItem {
  icon: ReactElement;
  text: string;
  url: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <BsPeopleFill />,
    text: 'Люди',
    url: '/people'
  },
  {
    icon: <FaBuildingColumns />,
    text: 'Компанії',
    url: '/company'
  }
]

export default menuItems;