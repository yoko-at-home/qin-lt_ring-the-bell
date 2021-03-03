import './styles.css';
import Confetti from 'react-confetti';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

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
      <div className='confettie-wrap' ref={confetiRef}>
        <Confetti numberOfPieces={350} width={width} height={height} />

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
            まだ鳴るその鐘を すべて 鳴らそう
            <br />
            完璧 など 忘れてしまえ
            <br />
            すべてのものに 亀裂 がある
            <br />
            だから 光 が差し込むのだ
          </p>
          <p className='party'>超訳: yoko</p>
          <p className='bottom' id='bottom'>
            <Link
              activeClass='active'
              to='page-top'
              scrollToTop
              spy={true}
              smooth='easeInOutQuart'
              offset={-70}
              duration={2000}
            >
              ✨
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
