import styled from 'styled-components';
import UniversalDorkComponent from '../components/UniversalDork.component';
import { FaGoogle } from 'react-icons/fa';
import DorkLinksComponent from '../components/DorkLink.component';
import { DorkStore, useDorkStore } from '../stores/Dork.store';
import UniversalUrlParamComponent from '../../UrlParams/components/UniversalUrlParam.component';
import SearchComponent from '../../../common/components/Search.component';
import { interfaceLangItems } from '../../UrlParams/items/interfaceLang.items';
import { geoItems } from '../../UrlParams/items/geo.items';
import { contentLangItems } from '../../UrlParams/items/contentLang.items';
import { UrlParamsStore, useUrlParamsStore } from '../../UrlParams/stores/urlParams.store';

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
  const urlParams = useUrlParamsStore((state: UrlParamsStore) => state);

  return (
    <Main>
      <LeftColumn>
        <DorkInputsDiv>
          <UniversalDorkComponent
            label={'Пошук в URL'}
            hintText={'Шукає слова, які містяться в URL. Наприклад, inurl:admin покаже сторінки, URL яких містить слово "admin".'}
            hintAnchor={'dorks'}
            placeholder={'Приклади: admin, login'}
            updateText={dorks.updateInUrlText}
            updateStatus={dorks.toggleInUrlStatus}
            status={dorks.inUrlStatus}
          />
          <UniversalDorkComponent
            label={'Пошук в Title сторінки'}
            hintText={'Пошук в заголовках сторінок сайтів(Title).'}
            hintAnchor={'intitle'}
            placeholder={'пошуковий запит'}
            updateText={dorks.updateTitleText}
            updateStatus={dorks.toggleTitleStatus}
            status={dorks.titleStatus}
          />
          <UniversalDorkComponent
            label={'Пошук по конкретному сайту'}
            hintText={'Використовується для обмеження пошуку інформацією, доступною лише на певному веб-сайті або домені.'}
            hintAnchor={'site'}
            placeholder={'Приклади: domain.com, domain.*, *.com'}
            updateText={dorks.updateSiteText}
            updateStatus={dorks.toggleSiteStatus}
            status={dorks.siteStatus}
          />
          <UniversalDorkComponent
            label={'Пошук по файлам'}
            hintText={'Використовується для пошуку файлів певного типу'}
            hintAnchor={'filetype'}
            placeholder={'Приклади: csv, pdf'}
            updateText={dorks.updateFileText}
            updateStatus={dorks.toggleFileStatus}
            status={dorks.fileStatus}
          />
        </DorkInputsDiv>
      </LeftColumn>
      <CenterColumn>
        <SearchComponent width="450px" searchText={dorks.searchText} setSearchText={dorks.updateSearchText} placeholder="Пошук" />
        <DorkLinksComponent icon={<FaGoogle size={69} />} />
      </CenterColumn>
      <RightColumn>
        <DorkInputsDiv>
          <UniversalUrlParamComponent
            label="Мова інтерфейсу пошукової системи"
            options={interfaceLangItems}
            status={urlParams.intefaceLangStatus}
            updateStatus={urlParams.updateInterfaceLangStatus}
            updateValue={urlParams.updateInterfaceLangValue}
          />
          <UniversalUrlParamComponent
            label="Локація результатів пошуку"
            options={geoItems}
            status={urlParams.geoStatus}
            updateStatus={urlParams.updateGeoStatus}
            updateValue={urlParams.updateGeoValue}
          />
          <UniversalUrlParamComponent
            label="Мова контенту результатів пошуку"
            options={contentLangItems}
            status={urlParams.contentLangStatus}
            updateStatus={urlParams.updateContentLangStatus}
            updateValue={urlParams.updateContentLangValue}
          />
        </DorkInputsDiv>
      </RightColumn>
    </Main>
  );
};

export default DorksPage;
