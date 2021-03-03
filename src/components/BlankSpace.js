import React from 'react';
import { Link } from 'react-scroll';

const BlankSpace = () => {
  return (
    <div className='blank__container' id='blank_space'>
      <br />
      <Link
        activeClass='active'
        to='bottom'
        spy={true}
        smooth={true}
        offset={-70}
        duration={10000}
      >
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        {/* --- */}
        <br />
        &nbsp;
        <br />
        &nbsp;
      </Link>
      <style jsx>{`
        .blank__container {
          width: 100%;
          height:100vh;
          margin-top: 100px;
          margin-bottom: 100px;
          text-align: center;
          color: chocolate;
        }
        }
      `}</style>
    </div>
  );
};

export default BlankSpace;
