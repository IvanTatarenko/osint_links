import styled from 'styled-components';
import UniversalDorkComponent from '../components/UniversalDork.component';
import { FaGoogle } from 'react-icons/fa';
import DorkLinksComponent from '../components/DorkLink.component';
import { DorkStore, useDorkStore } from '../stores/Dork.store';
import UniversalUrlParamComponent from '../components/UniversalUrlParam.component';
import { DefaultOptionType } from 'antd/es/select';
import SearchComponent from '../../../common/components/Search.component';

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DorkInputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #494949;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
  padding-bottom: 25px;
  width: 300px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  gap: 15px;
`;

const CenterColumn = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const LeftColumn = styled.div`
  flex: 1;
`;
const RightColumn = styled.div`
  flex: 1;
`;

const DorksPage = () => {
  const dorks = useDorkStore((state: DorkStore) => state);

  const options: DefaultOptionType[] = [{ value: '111', label: 'label' }];

  return (
    <Main>
      <LeftColumn>
        <DorkInputsDiv>
          <UniversalDorkComponent
            label={'Пошук в URL'}
            placeholder={'Приклади: admin, login'}
            updateSite={dorks.updateInUrlText}
            updateStatusSiteDork={dorks.toggleInUrlStatus}
            statusSiteDrok={dorks.inUrlStatus}
          />
          <UniversalDorkComponent
            label={'Пошук в Title сторінки'}
            placeholder={'пошуковий запит'}
            updateSite={dorks.updateTitleText}
            updateStatusSiteDork={dorks.toggleTitleStatus}
            statusSiteDrok={dorks.titleStatus}
          />
          <UniversalDorkComponent
            label={'Пошук по конкретному сайту'}
            placeholder={'Приклади: domain.com, domain.*, *.com'}
            updateSite={dorks.updateSiteText}
            updateStatusSiteDork={dorks.toggleSiteStatus}
            statusSiteDrok={dorks.siteStatus}
          />
          <UniversalDorkComponent
            label={'Пошук по файлам'}
            placeholder={'Приклади: csv, pdf'}
            updateSite={dorks.updateFileText}
            updateStatusSiteDork={dorks.toggleFileStatus}
            statusSiteDrok={dorks.fileStatus}
          />
        </DorkInputsDiv>
      </LeftColumn>
      <CenterColumn>
        <SearchComponent width="450px" searchText={dorks.searchText} setSearchText={dorks.updateSearchText} placeholder="Пошук" />
        <DorkLinksComponent icon={<FaGoogle size={50} />} />
      </CenterColumn>
      <RightColumn>
        <DorkInputsDiv>
          <UniversalUrlParamComponent label="Мова інтерфейсу пошукової системи" options={options} />
          <UniversalUrlParamComponent label="Локація результатів пошуку" options={options} />
          <UniversalUrlParamComponent label="Мова контенту результатів пошуку" options={options} />
        </DorkInputsDiv>
      </RightColumn>
    </Main>
  );
};

export default DorksPage;
