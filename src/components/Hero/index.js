import React, { useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg
} from './HeroElements';
import video from '../../videos/hero.mp4';
import { Button } from '../ButtonElement';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((currentVal) => !currentVal);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          src={video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Register for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="register"
            primary
            dark>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
