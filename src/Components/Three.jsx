import React from 'react';
import m from './images/th.png';
import { Slide } from 'react-awesome-reveal';
const Three = () => {
  return (
    <div className="container mt-5">
      <div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Slide direction="right" triggerOnce="true">
              <div className="px-5 ">
                <img src={m} alt="" style={{ width: '100%' }} />
              </div>
            </Slide>
          </div>
          <div className="col-12 col-lg-6">
            <div className="wrmg">
              <Slide direction="left" triggerOnce="true">
                <div className="mbm">Smart Savings </div>
                <div className="down">
                  Embark on a transformative journey & enjoy flexible personal
                  credit group saving options with competitive interest rates &
                  intelligent financial management
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
