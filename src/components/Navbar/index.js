import { useEffect, useState } from 'react';
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
import { IconContext } from 'react-icons/lib';

const links = ['about', 'discover', 'services', 'register'];
const iconStyles = { color: '#fff' };

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IconContext.Provider value={iconStyles}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={props.toggle}>
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
    </IconContext.Provider>
  );
};

export default Navbar;
