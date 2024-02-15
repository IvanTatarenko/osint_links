
import { FaGoogle } from "react-icons/fa";
import { FaYandex } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const CreateLinksPeople = (text: string) => [
  {
    icon: <FaGoogle size={30} />,
    text: 'Google',
    url: `https://www.google.com/search?q=${text}`,
  },
  {
    icon: <FaYandex size={30} />,
    text: 'Yandex',
    url: `https://yandex.ru/search/?text=${text}`,
  },
  {
    icon: <SlSocialVkontakte size={30} />,
    text: 'Vkontakte',
    url: `https://vk.com/search?c%5Bname%5D=1&c%5Bper_page%5D=40&c%5Bphoto%5D=1&c%5Bq%5D=${text}&c%5Bsection%5D=people`,
  },
  {
    icon: <FaOdnoklassnikiSquare size={30} />,
    text: 'Однокласники',
    url: `https://ok.ru/search?st.mode=Users&st.grmode=Groups&st.query=${text}`,
  },
  {
    icon: <FaTwitter size={30} />,
    text: 'Twitter',
    url: `https://twitter.com/search?q=${text}&src=typed_query&f=user`,
  },
  {
    icon: <FaFacebook size={30} />,
    text: 'Facebook',
    url: `https://www.facebook.com/search/people/?q=${text}`,
  },
  {
    icon: <FaTiktok size={30} />,
    text: 'TikTok',
    url: `https://www.tiktok.com/search/user?q=${text}`,
  },
];

export default CreateLinksPeople;