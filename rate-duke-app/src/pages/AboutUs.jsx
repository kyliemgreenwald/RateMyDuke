import React from 'react';
import TextBoxLeft from '../icons/TextBoxLeft.png';
import TextBoxRight from '../icons/TextBoxRight.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
        <h1 style={{float: "left", marginLeft: "25px", fontSize: "50px"}}> About Us</h1>
    <div style={{float: "right", marginRight: "20px", marginTop: "100px"}}>
        <img src={TextBoxLeft} />
        <img src={TextBoxRight} />
        <img src={TextBoxLeft} />
        <img src={TextBoxRight} />
    </div>
    
    </div>

  )
}

export default AboutUs