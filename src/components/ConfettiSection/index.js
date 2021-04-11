import './styles.css';
import Confetti from 'react-confetti';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import Applause from '../Applause';

export default function ConfettiSection() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState('');
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <>
      <div
        className='confettie-wrap'
        ref={confetiRef}
        style={{
          background:
            'radial-gradient(rgba(255,158,21,1) 0%, rgba(252,253,29,1) 63%, rgba(255,150,2,1) 100%',
        }}
      >
        <Confetti numberOfPieces={650} width={width} height={height} />

        <div id='party-info'>
          <h3 className='party__title'>
            Ring the bells that can still ring
            <br />
            Forget your perfect offering
            <br />
            There is a crack, a crack in everything
            <br />
            That's how the light gets in
          </h3>
          <p className='party'>by Leonard Cohen</p>
          <p className='party'>💓</p>
          <p className='party'>
            まだ鳴る その鐘を すべて 鳴らそう
            <br />
            完璧 など 忘れてしまえ
            <br />
            すべてのものに 亀裂 がある
            <br />
            だから 光 が差し込むのだ
          </p>
          <p className='party'>
            超訳: yoko{' '}
            <Link
              activeClass='active'
              to='page-top'
              spy={true}
              smooth='easeInOutQuart'
              offset={-70}
              duration={2000}
            >
              ✨
            </Link>
          </p>
        </div>
        <p className='thanks' style={{ textAlign: 'center' }} id='buttons'>
          Special thanks to
          <br />
          Ippo <Applause /> Pitang
        </p>
      </div>
    </>
  );
}
