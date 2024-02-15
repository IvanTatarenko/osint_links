import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PeoplePage from "./pages/people.page";
import CompanyPage from "./pages/company.page";

const router = createBrowserRouter([
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
    ],
  },
], { 
  basename: process.env.PUBLIC_URL || '/osint_links'
});


export default router;
