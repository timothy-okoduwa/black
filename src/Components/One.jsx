import React from 'react';
import m from './images/bank.png';
import { Slide } from 'react-awesome-reveal';
const One = () => {
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
                <div className="mbm">Mobile Banking made easy </div>
                <div className="down">
                  Open a free XAF, XOF,UAE,US,UK & EU Banking wallet.Receiveand
                  make foreign payments or convert currencies .
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
