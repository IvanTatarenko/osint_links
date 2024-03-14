import UsefulLinksComponent from '../../common/components/UsefulLinks.component';
import CreateLinksCompany from '../items/CreateLinksCompany';
import UniversalPage from '../../common/pages/Universal.page';
import { useEffect, useState } from 'react';
import { MenuItem } from '../../../../common/items/Menu.items';
import { getCompanyUsefulLinks } from '../../../../api/companyApi/companyApi';

const CompanyPage = () => {
  const [usefulLinksCompanyItems, setUsefulLinksCompanyItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchUsefulLinksCompanyItems = async () => {
      try {
        const items = await getCompanyUsefulLinks();
        setUsefulLinksCompanyItems(items);
      } catch (error) {
        console.error('Помилка при завантаженні корисних посилань:', error);
      }
    };

    fetchUsefulLinksCompanyItems();
  }, []);
  return (
    <>
      <UniversalPage
        UsefulLinksComponent={UsefulLinksComponent}
        usefulLinksItems={usefulLinksCompanyItems}
        searchPlaceholder={'Назва компанії'}
        createLinks={CreateLinksCompany}
      />
    </>
  );
};

export default CompanyPage;
