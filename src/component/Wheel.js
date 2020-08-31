import React from 'react';

const Wheel = (props) =>{

  return (
    <div className="container">
      <div className="outer-circle" id="outer-circle" onClick={props.onhandleRotate}>
        <span id="menu-btn" className="menu-btn" onClick={props.onMenuClick} >Menu</span>
        <img id="play-pause-btn" className="play-pause-btn" src="https://image.flaticon.com/icons/svg/860/860831.svg" alt="play-pause-btn"/>
        <img id="prev-btn" className="prev-btn" src="https://image.flaticon.com/icons/svg/56/56760.svg" alt="play-pause-btn"/>
        <img id="next-btn" className="next-btn" src="https://image.flaticon.com/icons/svg/724/724927.svg" alt="play-pause-btn"/>
        <div id="inner-circle" className="inner-circle" onClick={props.handleInnerCirlceClick}></div>
      </div>
    </div>
  );
}

export default Wheel;