import UsefulLinksComponent from "../components/UsefulLinks.component";
import CreateLinksPeople from "../items/CreateLinksPeople";
import usefulLinksPeopleItems from "../items/UsefulLinksPeople.items";
import UniversalPage from "./Universal.page";


const PeoplePage = () => {
  return (
    <>
    <UniversalPage UsefulLinksComponent={UsefulLinksComponent} usefulLinksItems={usefulLinksPeopleItems} searchPlaceholder={'Ім’я'} createLinks={CreateLinksPeople}/>
    </>
  );
};

export default PeoplePage;
