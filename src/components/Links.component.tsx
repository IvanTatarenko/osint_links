import styled from "styled-components";
import Link from "antd/es/typography/Link";
import { MenuItem } from "../items/Menu.items";

const MainDiv = styled.div`
  background-color: #494949;
  border-radius: 20px;
  width: 600px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;
const PlatformDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
`;
const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledLink = styled(Link)`
  color: #fff !important;
  &:hover {
    color: #00CC00 !important;
  }
`;


const LinksComponent = (props: { linksItems: MenuItem[] }) => {
  
  return (
    <MainDiv>
      <LinksDiv>
        <PlatformDiv>
          {props.linksItems.map((item: MenuItem) => (
            <StyledLink href={item.url} target="_blank">
              {item.icon}
            </StyledLink>
          ))}
        </PlatformDiv>
      </LinksDiv>
    </MainDiv>
  );
};

export default LinksComponent;
