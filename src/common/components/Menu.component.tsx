import menuItems, { MenuItem } from '../items/Menu.items';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainDiv = styled.div`
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
  display: flex;
  align-items: center;
`;
const RightColumn = styled.div`
  flex: 1;
`;

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
`;

const LogoLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin-left: 20px;
`

const MenuComponent = () => {
  return (
    <MainDiv>
      <LeftColumn><LogoLink to={'/'}>OSINT</LogoLink></LeftColumn>
      <CenterColumn>
        <MenuContainer>
          {menuItems.map((item: MenuItem) => (
            <StyledLink to={item.url} style={{ textDecoration: 'none' }}>
              <MenuButton>
                {item.icon} {item.text}
              </MenuButton>
            </StyledLink>
          ))}
        </MenuContainer>
      </CenterColumn>
      <RightColumn></RightColumn>
    </MainDiv>
  );
};

export default MenuComponent;
