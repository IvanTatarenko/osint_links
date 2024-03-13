import React, { useEffect, useState } from "react";
import { MenuItem } from "../../../../common/items/Menu.items";
import styled from "styled-components";
import LinksComponent from "../components/Links.component";
import SearchComponent from "../../../../common/components/Search.component";

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
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
  usefulLinksItems: MenuItem[];
  searchPlaceholder: string;
  createLinks: any;
}> = ({
  UsefulLinksComponent,
  usefulLinksItems,
  searchPlaceholder,
  createLinks,
}) => {
  const [searchText, setSearchText] = useState("");
  const [linksItems, setLinksItems] = useState([]);

  useEffect(() => {
    setLinksItems(createLinks(searchText));
  }, [searchText, createLinks]);

  return (
    <Main>
      <LeftColumn>
        <UsefulLinksComponent linksItems={usefulLinksItems} />
      </LeftColumn>
      <CenterColumn>
        <SearchComponent
          width="250px"
          searchText={searchText}
          setSearchText={setSearchText}
          placeholder={searchPlaceholder}
        />
        <LinksComponent linksItems={linksItems} />
      </CenterColumn>
      <RightColumn></RightColumn>
    </Main>
  );
};

export default UniversalPage;
