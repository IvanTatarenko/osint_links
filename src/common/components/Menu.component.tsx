import { useState } from 'react';
import menuItems, { MenuItem } from '../items/Menu.items';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const CenterColumn = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    display: none;
  }
`;
const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const RightColumn = styled.div`
  flex: 1;
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MobileMenuButton = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 100;
    cursor: pointer;
  }
`;

type MobileMenuProps = {
  open: boolean;
};

const MobileMenu = styled.div<MobileMenuProps>`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #333;
    z-index: 90;
    padding-top: 50px;
    transform: translateX(${(props) => (props.open ? '0' : '-100%')});
    transition: transform 0.3s ease;
  }
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

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const MenuComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MainDiv>
      <MobileMenuButton onClick={toggleMenu}>
        <IoMenu />
      </MobileMenuButton>
      <MobileMenu open={isMenuOpen}>
        {menuItems.map((item: MenuItem) => (
          <StyledLink to={item.url} key={item.text} style={{ textDecoration: 'none' }} onClick={toggleMenu}>
            <MenuButton>
              {item.icon} {item.text}
            </MenuButton>
          </StyledLink>
        ))}
      </MobileMenu>
      <LeftColumn>
        <LogoLink to={'/'}>
          <FaHome />
        </LogoLink>
      </LeftColumn>
      <CenterColumn>
        <MenuContainer>
          {menuItems.map((item: MenuItem) => (
            <StyledLink to={item.url} key={item.text} style={{ textDecoration: 'none' }}>
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
