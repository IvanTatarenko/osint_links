
import { FaGoogle } from "react-icons/fa";
import { FaYandex } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const CreateLinksCompany = (text: string) => [
  {
    icon: <FaGoogle size={30} />,
    text: 'Google',
    url: `https://www.google.com/search?q=${text}`,
  },
  {
    icon: <TbMapSearch size={30} />,
    text: 'Google Maps',
    url: `https://www.google.com/maps/search/${text}/@55.7511785,37.5689037,11.12z?entry=ttu`,
  },
  {
    icon: <FaYandex size={30} />,
    text: 'Yandex',
    url: `https://yandex.ru/search/?text=${text}`,
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

export default CreateLinksCompany;