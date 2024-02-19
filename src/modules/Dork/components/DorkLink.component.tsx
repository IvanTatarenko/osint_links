import styled from 'styled-components';
import Link from 'antd/es/typography/Link';
import { ReactElement } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useDorkStore } from '../stores/Dork.store';

const MainDiv = styled.div`
  display: flex;
  background-color: #494949;
  border-radius: 20px;
  width: 600px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;
const LeftColumnDiv = styled.div`
  flex: 1;
`;
const RightColumnDiv = styled.div`
  flex: 3;
`;

const DorkLinksComponent = (props: { icon: ReactElement }) => {
  const searchTextWhithDork = useDorkStore((state: any) => state.searchWithDork);

  return (
    <MainDiv>
      <LeftColumnDiv>
        <Link href={`https://www.google.ru/search?q=${searchTextWhithDork}`} target="_blank">
          {props.icon}
        </Link>
      </LeftColumnDiv>
      <RightColumnDiv>
      <TextArea value={searchTextWhithDork} />
      </RightColumnDiv>
    </MainDiv>
  );
};

export default DorkLinksComponent;
