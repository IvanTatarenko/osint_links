import UsefulLinksComponent from '../../common/components/UsefulLinks.component';
import CreateLinksPeople from '../items/CreateLinksPeople';
import UniversalPage from '../../common/pages/Universal.page';
import { useEffect, useState } from 'react';
import { getPeopleUsefulLinks } from '../../../../api/peopleApi/peopleApi';
import { MenuItem } from '../../../../common/items/Menu.items';

const PeoplePage = () => {
  const [usefulLinksPeopleItems, setUsefulLinksPeopleItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchUsefulLinksPeopleItems = async () => {
      try {
        const items = await getPeopleUsefulLinks();
        setUsefulLinksPeopleItems(items);
      } catch (error) {
        console.error('Помилка при завантаженні корисних посилань:', error);
      }
    };

    fetchUsefulLinksPeopleItems();
  }, []);
  return (
    <>
      <UniversalPage
        UsefulLinksComponent={UsefulLinksComponent}
        usefulLinksItems={usefulLinksPeopleItems}
        searchPlaceholder={'Ім’я'}
        createLinks={CreateLinksPeople}
      />
    </>
  );
};

export default PeoplePage;
