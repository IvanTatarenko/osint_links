import menuItems, { MenuItem } from "../items/Menu.items";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuButton = styled.div`
  padding: 20px;
  position: relative; 
  &:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
`

const MenuComponent = () => {
  return (
    <MenuContainer>
      {menuItems.map((item: MenuItem) => (
        <StyledLink to={item.url} style={{textDecoration: 'none'}}>
        <MenuButton >
          {item.icon} {item.text}
        </MenuButton>
        </StyledLink>
      ))}
    </MenuContainer>
  );
};

export default MenuComponent;
