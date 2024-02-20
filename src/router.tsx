import { createHashRouter } from "react-router-dom";
import App from "./App";
import PeoplePage from "./modules/SearchHealper/People/pages/People.page";
import CompanyPage from "./modules/SearchHealper/Company/pages/Company.page";
import DorksPage from "./modules/Dork/pages/Dorks.page";
import HelpPage from "./modules/Help/pages/Help.page";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "people",
        element: <PeoplePage />,
      },
      {
        path: "company",
        element: <CompanyPage />,
      },
      {
        path: "dorks",
        element: <DorksPage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
    ],
  },
]);


export default router;
