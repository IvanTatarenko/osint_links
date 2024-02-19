import UsefulLinksComponent from "../../common/components/UsefulLinks.component";
import CreateLinksCompany from "../items/CreateLinksCompany";
import usefulLinksComanyItems from "../items/UsefulLinksCompany.item";
import UniversalPage from "../../common/pages/Universal.page";


const CompanyPage = () => {
  return (
    <>
    <UniversalPage UsefulLinksComponent={UsefulLinksComponent} usefulLinksItems={usefulLinksComanyItems} searchPlaceholder={'Назва компанії'} createLinks={CreateLinksCompany}/>
    </>
  );
};

export default CompanyPage;
