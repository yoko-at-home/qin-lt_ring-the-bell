import React from 'react';
function Applause() {
  let audio = new Audio('applause-big.mp3');
  const start = () => {
    audio.play();
  };
  return (
    <>
      <button className='btn' onClick={start}>
        ✨
      </button>
      <style jsx>{`
        .btn {
          border-radius:  50%;
          border: none;
          -moz-text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
          -webkit-text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
          -ms-text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
          text-shadow: 3px 3px 10px rgba(0, 0, 0, 1.9);
          width: 43px;
          height: 43px;
          font-size: 1rem;
          cursor: pointer;
          background: transparent;
          box-shadow: 0px -6px 36px 0px #fbeb36, 0px 0px 6px 0px #ffb347;
        }

        .btn:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}

export default Applause;
