import { useEffect, useState } from 'react';
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
  const [inputText, setInpitText] = useState('');

  const dorks = useDorkStore((state: DorkStore) => state);

  useEffect(() => {
    const combiDorks = () => {
      const statuses = [dorks.siteStatus, dorks.titleStatus];
      const texts = [dorks.siteText, dorks.titleText];

      let combinedText = '';
      for (let index = 0; index < statuses.length; index++) {
        if (statuses[index]) {
          combinedText += texts[index] + ' ';
        }
      }
      combinedText += inputText;
      dorks.updateSearchWithDork(combinedText.trim());
    };

    combiDorks();
  }, [dorks.siteText, dorks.siteStatus, dorks.titleText, dorks.titleStatus, dorks.updateSearchWithDork, inputText]);


const options: DefaultOptionType[] = [{ value: '111', label: 'label' }];

  return (
    <Main>
      <LeftColumn>
        <DorkInputsDiv>
          <UniversalDorkComponent
            label={'Пошук по конкретному сайту'}
            placeholder={'site.com'}
            updateSite={dorks.updateSiteText}
            updateStatusSiteDork={dorks.toggleSiteStatus}
            statusSiteDrok={dorks.siteStatus}
          />
          <UniversalDorkComponent
            label={'Пошук в Title сторінки'}
            placeholder={'Title'}
            updateSite={dorks.updateTitleText}
            updateStatusSiteDork={dorks.toggleTitleStatus}
            statusSiteDrok={dorks.titleStatus}
          />
        </DorkInputsDiv>
      </LeftColumn>
      <CenterColumn>
        <SearchComponent width="450px" searchText={inputText} setSearchText={setInpitText} placeholder="Пошук" />
        <DorkLinksComponent icon={<FaGoogle size={50} />} />
      </CenterColumn>
      <RightColumn>
        <DorkInputsDiv>
          <UniversalUrlParamComponent label="Мова інтерфейсу пошукової системи" options={options} />
          <UniversalUrlParamComponent label="Локація результатів пошуку" options={options}/>
          <UniversalUrlParamComponent label="Мова контенту результатів пошуку" options={options}/>
        </DorkInputsDiv>
      </RightColumn>
    </Main>
  );
};

export default DorksPage;
