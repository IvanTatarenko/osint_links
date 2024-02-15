import { createHashRouter } from "react-router-dom";
import App from "./App";
import PeoplePage from "./pages/People.page";
import CompanyPage from "./pages/Company.page";
import DorksPage from "./pages/Dorks.page";

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
    ],
  },
], { 
  basename: process.env.PUBLIC_URL || '/osint_links'
});


export default router;
