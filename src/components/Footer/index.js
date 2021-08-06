import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  Copyright,
  CopyrightWrap,
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  WebsiteLogo,
  WebsiteRights
} from './FooterElements';

const fakeLinks = [
  {
    title: 'About Us',
    links: [
      'How it works',
      'Testimonials',
      'Careers',
      'Investors',
      'Terms of Service'
    ]
  },
  {
    title: 'Videos',
    links: ['Submit Video', 'Ambassadors', 'Agency', 'Influencer']
  },
  {
    title: 'Contact Us',
    links: ['Contact', 'Support', 'Destinations', 'Sponsorships']
  },
  {
    title: 'Social Media',
    links: ['Instagram', 'Facebook', 'Youtube', 'Twitter']
  }
];

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {fakeLinks.map((el) => (
              <FooterLinkItems key={el.title}>
                <FooterLinkTitle>{el.title}</FooterLinkTitle>
                {el.links.map((link) => (
                  <FooterLink key={link} to="/login">
                    {link}
                  </FooterLink>
                ))}
              </FooterLinkItems>
            ))}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <Copyright>
          <CopyrightWrap>
            <WebsiteLogo to="/" onClick={toggleHome}>
              dolla
            </WebsiteLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
          </CopyrightWrap>
        </Copyright>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
