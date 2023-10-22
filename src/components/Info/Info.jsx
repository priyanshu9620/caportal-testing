import React from 'react';
import "./Info.css"

import image1 from '../../assets/passes.png';
import image2 from '../../assets/merch1.png';
import image3 from '../../assets/prize.png';
import image4 from '../../assets/certi1.png';

const MyComponent = () => {
  return (
    <>
      <div className="container">
          <div className='main-text'>
            <h1>WHY CA?</h1>
          </div>
          <div className="cover">
            <div className="box">
              <div className="text-block">Get a referral code and share it with as many participants as you can</div>
            </div>
            <div className="box">
              <div className="text-block">Score points for each registration through your referral code and top the leaderboard.</div>
            </div>
            <div className="box">
              <div className="text-block">Exciting goodies and prizes for the top finishers!</div>
            </div>
          </div>
      </div>

      <div className='box-main'>
        <div className='PRIZES'>
          <h1>PRIZES</h1>
        </div>
        <div className='prizes-container'>
          <div className='item'>
            <img src={image1} alt="image1" />
            <p className='passes'>PASSES</p>
          </div>
          <div className='item'>
            <img src={image2} alt="image2" />
            <p className='merchandise'>MERCHANDISE</p>
          </div>
          <div className='item'>
            <img src={image3} alt="image3" />
            <p className='passes'>PRIZES</p>
          </div>
          <div className='item'>
            <img src={image4} alt="image4" />
            <p className='passes'>CERTIFICATES</p>
          </div>
        </div>
      </div>
    </>

  );
}

export default MyComponent;



