import { useState } from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import {
  HomeObjOne,
  HomeObjThree,
  HomeObjTwo
} from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
    </>
  );
};

export default Home;
