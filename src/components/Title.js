import React from 'react';
import { Link } from 'react-scroll';

import Fade from 'react-reveal/Fade';

function Title() {
  return (
    <div>
      <Fade top>
        <div className='title__container' id='page-top'>
          Ring the Bell
          <br />
          <Link
            activeClass='active'
            to='countdown'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            easeInOutQuad
          >
            <span style={{ fontSize: '36px' }}>
              ひつじさんと Lightning Talk
            </span>
          </Link>
        </div>
      </Fade>
    </div>
  );
}

export default Title;
