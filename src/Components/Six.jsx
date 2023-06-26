import React from 'react';
import m from './images/gi.png';
import { Slide } from 'react-awesome-reveal';
const Six = () => {
  return (
    <div className="container mt-5">
      <div>
        <div className="row">
          <div className="col-12 col-lg-6" triggerOnce="true">
            <div className="wrmg">
              <Slide direction="right">
                <div className="mbm">Loan & Debt Management </div>
                <div className="down">
                  Effortlessly track loans, manage debts, and stay on top of
                  your financial obligations. Take control of your finances for
                  a debt-free future.
                </div>
              </Slide>
            </div>
          </div>
          <div className="col-12 col-lg-6" triggerOnce="true">
            <Slide direction="left">
              <div className="px-5 ">
                <img src={m} alt="" style={{ width: '100%' }} />
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Six;
