import React, { useEffect, useRef, createRef, FC, useState } from 'react';
import styled from 'styled-components';
import { HelpItem } from '../../../api/helpApi/helpApi.types';
import { getHelpItems } from '../../../api/helpApi/helpApi';

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CenterColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90vw;
  }
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
  @media (max-width: 758px) {
    margin-left: 0px;
    width: 80vw;
  }
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

const StyledP = styled.p``;
const StyledH2 = styled.h2``;
const StyledH3 = styled.h3``;

interface Refs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

const HelpPage: FC = () => {
  const [helpItems, setHelpItems] = useState<HelpItem[]>([]);
  const refs = useRef<Refs>({});

  useEffect(() => {
    const fetchHelpItems = async () => {
      try {
        const response = await getHelpItems();
        setHelpItems(response);

        const initialRefs: Refs = response.reduce<Refs>((acc: Refs, item: HelpItem) => {
          acc[item.anchor] = createRef<HTMLDivElement>();
          item.childrens?.forEach((child: HelpItem) => {
            acc[child.anchor] = createRef<HTMLDivElement>();
          });
          return acc;
        }, {});
        refs.current = initialRefs;
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
      }
    };

    fetchHelpItems();
  }, []);

  useEffect(() => {
    const hashParts = window.location.hash.split('#');
    const elementId = hashParts[hashParts.length - 1];
    if (elementId && refs.current[elementId]) {
      refs.current[elementId].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [helpItems]);

  const scrollToSection = (id: string) => {
    const ref = refs.current[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  interface MenuItemProps {
    item: HelpItem;
    onClick: (id: string) => void;
  }

  const RenderMenuItem: FC<MenuItemProps> = ({ item, onClick }) => (
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
            <StyledH2>{item.title}</StyledH2>
            <StyledP>{item.text}</StyledP>
            {item.childrens?.map((child) => (
              <div key={child.anchor} ref={refs.current[child.anchor]} id={child.anchor}>
                <StyledH3>{child.title}</StyledH3>
                <StyledP>{child.text}</StyledP>
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
