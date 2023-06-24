import React from 'react';
import m from './images/mbs.png';
import { AiOutlineCheck } from 'react-icons/ai';
import { Slide } from 'react-awesome-reveal';
const Seven = () => {
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
                <div className="mbm">Deals & Discounts </div>
                <div className="down">
                  Endless possibilities, discounts & cash back deals <br />{' '}
                  <AiOutlineCheck className="checkss" /> Startup visas <br />{' '}
                  <AiOutlineCheck className="checkss" /> Immigrant worker’s pack{' '}
                  <br /> <AiOutlineCheck className="checkss" /> Cashbacks <br />{' '}
                  <AiOutlineCheck className="checkss" /> Personal job
                  opportunities
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seven;
