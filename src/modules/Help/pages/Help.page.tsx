import React, { useEffect, useRef, createRef } from 'react';
import styled from 'styled-components';
import helpItems, { HelpItem } from '../items/help.items';

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CenterColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const LeftColumn = styled.div`
  flex: 1;
`;
const RightColumn = styled.div`
  flex: 1;
`;

const AnchorMenu = styled.div`
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

const StyledA = styled.a`
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const HelpPage = () => {
  const refs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>(
    helpItems.reduce<{ [key: string]: React.RefObject<HTMLDivElement> }>((acc, item) => {
      acc[item.anchor] = createRef<HTMLDivElement>();
      item.childrens?.forEach((child) => {
        acc[child.anchor] = createRef<HTMLDivElement>();
      });
      return acc;
    }, {}),
  );

  useEffect(() => {
    const hashParts = window.location.hash.split('#');
    const elementId = hashParts[hashParts.length - 1];
    if (elementId && refs.current[elementId]) {
      refs.current[elementId].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const ref = refs.current[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const RenderMenuItem = ({ item, onClick }: any) => (
    <div>
      <StyledA key={item.anchor} onClick={() => onClick(item.anchor)}>
        {item.title}
      </StyledA>
      {item.childrens && (
        <div style={{ paddingLeft: '20px' }}>
          {item.childrens.map((child: HelpItem) => (
            <RenderMenuItem key={child.anchor} item={child} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <Main>
      <LeftColumn>
        <AnchorMenu>
          {helpItems.map((item) => (
            <RenderMenuItem key={item.anchor} item={item} onClick={scrollToSection} />
          ))}
        </AnchorMenu>
      </LeftColumn>
      <CenterColumn>
        {helpItems.map((item) => (
          <div key={item.anchor} ref={refs.current[item.anchor]} id={item.anchor}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {item.childrens?.map((child) => (
              <div key={child.anchor} ref={refs.current[child.anchor]} id={child.anchor}>
                <h3>{child.title}</h3>
                <p>{child.text}</p>
              </div>
            ))}
          </div>
        ))}
      </CenterColumn>
      <RightColumn />
    </Main>
  );
};

export default HelpPage;
