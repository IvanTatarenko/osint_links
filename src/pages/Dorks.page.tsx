import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchComponent from '../components/Search.component';
import { useSiteDorkStore } from '../stores/SiteDork.store';
import UniversalDorkComponent from '../components/UniversalDork.component';
import { useTitleDorkStore } from '../stores/TitleDork.store';
import { FaGoogle } from 'react-icons/fa';
import DorkLinksComponent from '../components/DorkLink.component';
import { useDorkStore } from '../stores/Dork.store';

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DorkUnputsDiv = styled.div`
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

  const updateSearchTextWhithDork = useDorkStore((state: any) => state.updateText);

  const updateSiteTextDork = useSiteDorkStore((state: any) => state.updateText);
  const siteTextDork = useSiteDorkStore((state: any) => state.text);
  const updateStatusSiteDork = useSiteDorkStore((state: any) => state.toggleStatus);
  const statusSiteDrok = useSiteDorkStore((state: any) => state.status);

  const updateTitleTextDork = useTitleDorkStore((state: any) => state.updateText);
  const titleTextDork = useTitleDorkStore((state: any) => state.text);
  const updateStatusTitleDork = useTitleDorkStore((state: any) => state.toggleStatus);
  const statusTitleDrok = useTitleDorkStore((state: any) => state.status);

  useEffect(() => {
    const combiDorks = () => {
      const statuses = [statusSiteDrok, statusTitleDrok];
      const texts = [siteTextDork, titleTextDork];

      let combinedText = '';
      for (let index = 0; index < statuses.length; index++) {
        if (statuses[index]) {
          combinedText += texts[index] + ' ';
        }
      }
      combinedText += inputText;
      updateSearchTextWhithDork(combinedText.trim())
    };

    combiDorks();
  }, [siteTextDork, statusSiteDrok, titleTextDork, statusTitleDrok, inputText, updateSearchTextWhithDork]);

  return (
    <Main>
      <LeftColumn>
        <DorkUnputsDiv>
          <UniversalDorkComponent
            label={'Пошук по конкретному сайту'}
            placeholder={'site.com'}
            updateSite={updateSiteTextDork}
            updateStatusSiteDork={updateStatusSiteDork}
            statusSiteDrok={statusSiteDrok}
          />
          <UniversalDorkComponent
            label={'Пошук в Title сторінки'}
            placeholder={'Title'}
            updateSite={updateTitleTextDork}
            updateStatusSiteDork={updateStatusTitleDork}
            statusSiteDrok={statusTitleDrok}
          />
        </DorkUnputsDiv>
      </LeftColumn>
      <CenterColumn>
        <SearchComponent width="450px" searchText={inputText} setSearchText={setInpitText} placeholder="Пошук" />
        <DorkLinksComponent icon={<FaGoogle size={50} />}/>
      </CenterColumn>
      <RightColumn>
      </RightColumn>
    </Main>
  );
};

export default DorksPage;
