import React from 'react';
import Title from './components/Title';
import CountDown from './components/CountDown';
import Memory from './components/Memory';
import BlankSpace from './components/BlankSpace';
import ConfettiSection from './components/ConfettiSection';
import { Link } from 'react-scroll';

import './App.css';

export default function Home() {
  return (
    <>
      <Link
        activeClass='active'
        to='bottom'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className='sheep blurHighlight-sheep'></div>
      </Link>
      <Title />
      <CountDown />
      <Memory />
      <BlankSpace />
      <ConfettiSection />
    </>
  );
}
