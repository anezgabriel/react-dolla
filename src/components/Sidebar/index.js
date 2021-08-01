import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap
} from './SidebarElements';

const links = ['about', 'discover', 'services', 'register'];

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarLink onClick={props.toggle} key={link} to={link}>
              {link}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
