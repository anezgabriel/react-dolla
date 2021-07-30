import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const links = ['about', 'discover', 'services', 'register'];

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {links.map((link) => (
              <NavItem key={link}>
                <NavLinks to={link}>{link}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="login">Login</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
