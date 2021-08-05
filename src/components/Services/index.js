import React from 'react';
import Icon1 from '../../images/data.svg';
import Icon2 from '../../images/discount.svg';
import Icon3 from '../../images/premium-benefits.svg';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from './ServicesElements';

const data = [
  {
    title: 'Reduce expenses',
    text: 'We help reduce your fees and increase your overall revenue.',
    icon: Icon1
  },
  {
    title: 'Virtual Offices',
    text: 'You can access our platform online anywhere in the world.',
    icon: Icon2
  },
  {
    title: 'Premium Benefits',
    text: 'Unlock our special membership card that returns 5% cash back.',
    icon: Icon3
  }
];

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {data.map((service) => (
          <ServicesCard key={service.title}>
            <ServicesIcon src={service.icon} />
            <ServicesH2>{service.title}</ServicesH2>
            <ServicesP>{service.text}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
