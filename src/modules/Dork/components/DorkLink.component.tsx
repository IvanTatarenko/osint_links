import styled from 'styled-components';
import Link from 'antd/es/typography/Link';
import { ReactElement } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { DorkStore, useDorkStore } from '../stores/Dork.store';
import { UrlParamsStore, useUrlParamsStore } from '../../UrlParams/stores/urlParams.store';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #494949;
  border-radius: 20px;
  width: 600px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;
const FirstLine = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const LeftColumnDiv = styled.div`
  flex: 1;
`;
const RightColumnDiv = styled.div`
  flex: 3;
`;

const DorkLinksComponent = (props: { icon: ReactElement }) => {
  const searchTextWhithDork = useDorkStore((state: DorkStore) => state.searchWithDork);
  const urlParams = useUrlParamsStore((state: UrlParamsStore) => state.urlParams);

  const url = `https://www.google.ru/search?q=${searchTextWhithDork}${urlParams}`;

  return (
    <MainDiv>
      <FirstLine>
      <LeftColumnDiv>
        <Link href={`https://www.google.ru/search?q=${searchTextWhithDork}${urlParams}`} target="_blank">
          {props.icon}
        </Link>
      </LeftColumnDiv>
      <RightColumnDiv>
      <TextArea value={searchTextWhithDork} />
      </RightColumnDiv>
      </FirstLine>
      <div>{url}</div>
    </MainDiv>
  );
};

export default DorkLinksComponent;
