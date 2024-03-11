import { IoPersonSharp } from 'react-icons/io5';
import { FaBuildingUser } from 'react-icons/fa6';
import { MenuItem } from '../../../../common/items/Menu.items';

const usefulLinksPeopleItems: MenuItem[] = [
  {
    icon: <IoPersonSharp />,
    text: 'Політичні дячі росії та Білорусі',
    url: 'https://rupep.org/en/',
  },
  {
    icon: <FaBuildingUser />,
    text: 'Компанії, організації та ФОП України',
    url: 'https://clarity-project.info/edrs#google_vignette',
  },
  {
    icon: <IoPersonSharp />,
    text: 'Reveng',
    url: 'https://reveng.ee/',
  },
  {
    icon: <IoPersonSharp />,
    text: 'Сервіси якими користується особа',
    url: 'https://epieos.com/',
  },
  {
    icon: <IoPersonSharp />,
    text: 'Миротворець',
    url: 'https://www.list-org.com/',
  },
];


export default usefulLinksPeopleItems;

