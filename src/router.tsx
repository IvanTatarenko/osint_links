import { createHashRouter } from "react-router-dom";
import App from "./App";
import PeoplePage from "./modules/SearchHealper/People/pages/People.page";
import CompanyPage from "./modules/SearchHealper/Company/pages/Company.page";
import HelpPage from "./modules/Help/pages/Help.page";
import SearchEnginesPage from "./modules/SearchEngines/common/pages/SearchEngines.page";
import HomePage from "./modules/Home/home.page";

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
        path: "search-engines",
        element: <SearchEnginesPage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "/",
        element: <HomePage />
      }
    ],
  },
]);


export default router;
