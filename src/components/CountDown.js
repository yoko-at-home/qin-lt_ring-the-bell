import React from 'react';
import { useCountUp } from 'react-countup';
import { Link } from 'react-scroll';

const CountDown = () => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: 8364,
    delay: 1000,
    duration: 5,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
    <div className='section1__counter-container'>
      <div id='countdown'>
        &nbsp;
        <div></div>
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
      </div>
      今を遡ること
      <div className='tag highlight' dataTarget='8364'>
        {countUp}
      </div>
      <Link
        activeClass='active'
        to='section2'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <span>年</span>
      </Link>
      <button className='button' onClick={() => update(23)}></button>
      <style jsx>{`
        .section1__counter-container {
          height: 100vh;
          font-size: 6rem;
          color: #fff;
          text-align: center;
          margin: 100px 50px;
        }
        .button {
          width: 15px;
          height: 15px;
          background-color: orange;
          box-shadow: 0px 0px 15px #f5eddc, 0px 0px 15px #f5eddc,
            0px 0px 15px #e6f704;
          border-radius: 50%;
          outline: none;
          border: 0;
          margin-left: 15px;
        }
        @media screen and (max-width: 479px) {
          .section1__counter-container {
            font-size: 3rem;
            margin: 100px auto;
          }
        }
      `}</style>
    </div>
  );
};

export default CountDown;
