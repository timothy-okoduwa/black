import React from 'react';
import m from './images/fi.png';
import { Slide } from 'react-awesome-reveal';
const Five = () => {
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
                <div className="mbm">Automated budgetting </div>
                <div className="down">
                  Black helps you effortlessly track bills & expenses, set
                  financial goals, achieve financial stability & uncover savings
                  habits
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
