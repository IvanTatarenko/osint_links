import UsefulLinksComponent from "../components/UsefulLinks.component";
import CreateLinksCompany from "../items/CreateLinksCompany";
import usefulLinksComanyItems from "../items/UsefulLinksCompany.item";
import UniversalPage from "./Universal.page";


const CompanyPage = () => {
  return (
    <>
    <UniversalPage UsefulLinksComponent={UsefulLinksComponent} usefulLinksItems={usefulLinksComanyItems} searchPlaceholder={'Назва компанії'} createLinks={CreateLinksCompany}/>
    </>
  );
};

export default CompanyPage;
