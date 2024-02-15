import React, { useEffect, useState } from "react";
import { MenuItem } from "../items/Menu.items";
import styled from "styled-components";
import SearchComponent from "../components/Search.component";
import LinksComponent from "../components/Links.component";

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

const UniversalPage: React.FC<{
  UsefulLinksComponent: React.ComponentType<{ linksItems: MenuItem[] }>;
  usefulLinksItems: MenuItem[]; searchPlaceholder: string; createLinks: any;
}> = ({ UsefulLinksComponent, usefulLinksItems, searchPlaceholder, createLinks }) => {
  const [searchText, setSearchText] = useState("");
  const [linksItems, setLinksItems] = useState([]);

  useEffect(() => {
    setLinksItems(createLinks(searchText));
  }, [searchText]);

  return (
    <Main>
      <LeftColumn>
        <UsefulLinksComponent linksItems={usefulLinksItems} />
      </LeftColumn>
      <CenterColumn>
        <SearchComponent
          searchText={searchText}
          setSearchText={setSearchText}
          placeholder={searchPlaceholder}
        />
        <LinksComponent linksItems={linksItems}/>
      </CenterColumn>
      <RightColumn></RightColumn>
    </Main>
  );
};

export default UniversalPage;
