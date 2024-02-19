import styled from "styled-components";
import Link from "antd/es/typography/Link";
import { MenuItem } from "../../../../common/items/Menu.items";

const MainDiv = styled.div`
  background-color: #494949;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 25px;
  width: 300px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuStyledItem = styled.li`
  display: flex;
  margin-top: 15px;
  align-items: center;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  color: #fff !important;
  &:hover {
    text-decoration: underline  !important;
  }
`

const UsefulLinksComponent = (props: {linksItems: MenuItem[]}) => {
  return (
    <MainDiv>
      <h3>Корисні посилання</h3>
      <Menu>
        {props.linksItems.map((item: any) => (
          <MenuStyledItem>
            {item.icon}
            <StyledLink
              href={item.url}
              target="_blank"
            >
              {item.text}
            </StyledLink>
          </MenuStyledItem>
        ))}
      </Menu>
    </MainDiv>
  );
};

export default UsefulLinksComponent;
