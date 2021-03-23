import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './Memory.styles.css';
import Slider from './Illusion';

function Memory() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    window.addEventListener('scroll', checkBoxes);

    checkBoxes();
    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4;
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          // console.log('foo');
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    }
  }, []);
  return (
    <div className='section2__container'>
      <h1 id='section2'>&nbsp;</h1>
      <div className='box img1'>
        <Link
          activeClass='active'
          to='lightningtalk'
          spy={true}
          smooth={true}
          offset={-70}
          duration={30000}
        >
          <h3>1998 年 5 月 旅立ち</h3>
        </Link>
      </div>

      <div className='box img4'>
        <h3>辿り着いた先は</h3>
      </div>
      <div className='box img5'>
        <h3>緑豊かな...</h3>
      </div>
      <div className='box img6'>
        <h3>水鳥の鳴き声</h3>
      </div>
      <div className='box img7'>
        <h3>庭にリス</h3>
      </div>
      <div className='box img8'>
        <h3>徒歩圏の公園に野生のしか</h3>
      </div>
      <div className='box img9'>
        <h3>動物をこよなく愛する人々に囲まれ</h3>
      </div>
      <div className='box img10'>
        <h3>どこにでもあるような通りの</h3>
      </div>
      <div className='box img11'>
        <h3>つつましい我が家</h3>
      </div>
      <div className='box img12'>
        <h3 style={{ position: 'absolute', bottom: '30%' }}>
          「蛾」すら慈しむ生活
        </h3>
      </div>
      <div className='box horse'>
        <h3>そこらじゅうに馬</h3>
      </div>
      <div className='box img14'>
        <h3>そこらじゅうに 💩💩💩 草草草</h3>
      </div>
      <div className='box img15'>
        <h3>
          子供たちが通ったのは、徒歩５分の
          <br />
          St. Richard C of E primary school
        </h3>
      </div>
      <div className='box img16' id='lightningtalk'>
        <Link
          activeClass='active'
          to='sheep'
          spy={true}
          smooth={true}
          // offset={-70}
          duration={200}
        >
          <h3>Lighting Talkの原体験</h3>
        </Link>
      </div>
      <div id='sheep'></div>
      <div className='box sheep2'>
        <Link
          activeClass='active'
          to='japan'
          spy={true}
          smooth={true}
          offset={-70}
          duration={7000}
        >
          <h3>明日、ひつじさんを連れて行く</h3>
        </Link>
      </div>

      <div className='box img17' id='slide-next'>
        <Link
          activeClass='active'
          to='japan'
          spy={true}
          smooth={true}
          offset={-70}
          duration={10000}
          // easeInOutQuad
        >
          <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
        </Link>
      </div>
      <div className='box img19'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img20'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img21'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img22'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img24'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img26'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img27'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img29'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img30'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img31'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img18'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>
      <div className='box img25'>
        <h3>楽しくも慌ただしい5年と3ヶ月の月日が流れ</h3>
      </div>

      <div className='section2__container'>
        <div className='box img101' id='japan' style={{ marginBottom: '50px' }}>
          <Link
            activeClass='active'
            to='next'
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <h3>2003年8月 日本へ</h3>
          </Link>
        </div>
      </div>

      <h1>&nbsp;</h1>
      <div
        className='box'
        style={{
          height: '100vh',
          width: '98vw',
          zIndex: 10000,
          backgroundColor: 'rgba(0,0,0,0.2)',
          border: '1px',
        }}
        id='next'
      >
        <Slider />
        <Link
          activeClass='active'
          to='blank_space'
          spy={true}
          smooth={true}
          offset={-70}
          duration={2000}
          style={{ zIndex: 1000 }}
        >
          ✨
        </Link>
      </div>
    </div>
  );
}

export default Memory;
