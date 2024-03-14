import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';
import UniversalUrlParamComponent from '../../UrlParams/components/UniversalUrlParam.component';
import { interfaceLangItems } from '../../UrlParams/items/interfaceLang.items';
import { contentLangItems } from '../../UrlParams/items/contentLang.items';
import { UrlParamsStore, useUrlParamsStore } from '../../UrlParams/stores/urlParams.store';
import { Switch } from 'antd';
import SearchComponent from '../../../../common/components/Search.component';
import { geoItems } from '../../UrlParams/items/geo.items';
import UniversalDorkComponent from '../../Dork/components/UniversalDork.component';
import { DorkStore, useDorkStore } from '../../Dork/stores/Dork.store';
import DorkLinksComponent from '../../Dork/components/DorkLink.component';

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
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
  @media (max-width: 600px) {
    width: 80vw;
    margin: 0;
  }
`;

const CenterColumn = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1400px) {
    order: 1
  }
`;
const LeftColumn = styled.div`
  flex: 1;
  @media (max-width: 1400px) {
    order: 2
  }
`;
const RightColumn = styled.div`
  flex: 1;
  @media (max-width: 1400px) {
    order: 3
  }
`;
const StyledSwichContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const SearchEnginesPage = () => {
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
          {/* <UniversalDorkComponent
            label={'Пошук по файлам'}
            hintText={'Використовується для пошуку файлів певного типу'}
            hintAnchor={'filetype'}
            placeholder={'Приклади: csv, pdf'}
            updateText={dorks.updateFileText}
            updateStatus={dorks.toggleFileStatus}
            status={dorks.fileStatus}
          /> */}
        </DorkInputsDiv>
      </LeftColumn>
      <CenterColumn>
        <SearchComponent width="450px" searchText={dorks.searchText} setSearchText={dorks.updateSearchText} placeholder="Пошук" />
        <StyledSwichContainer>
          <Switch
            checkedChildren="Точний пошук"
            unCheckedChildren="Точний пошук"
            checked={dorks.exactSearchStatus}
            onChange={() => dorks.toggleExactSearchStatus()}
          />
        </StyledSwichContainer>

        <DorkLinksComponent icon={<FaGoogle size={69} />} />
      </CenterColumn>
      <RightColumn>
        <DorkInputsDiv>
          <UniversalUrlParamComponent
            label="Мова інтерфейсу пошукової системи"
            hintText={'Визначає мову інтерфейсу користувача.'}
            hintAnchor={'hl'}
            options={interfaceLangItems}
            status={urlParams.intefaceLangStatus}
            updateStatus={urlParams.updateInterfaceLangStatus}
            updateValue={urlParams.updateInterfaceLangValue}
          />
          <UniversalUrlParamComponent
            label="Локація результатів пошуку"
            hintText={'Вказує на країну для локалізації пошукових результатів.'}
            hintAnchor={'gl'}
            options={geoItems}
            status={urlParams.geoStatus}
            updateStatus={urlParams.updateGeoStatus}
            updateValue={urlParams.updateGeoValue}
          />
          <UniversalUrlParamComponent
            label="Мова контенту результатів пошуку"
            hintText={'Вказує на мову пошукових результатів.'}
            hintAnchor={'lr'}
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

export default SearchEnginesPage;
