import React from 'react';
import g from './images/google.png';
import a from './images/apple.png';
const HeadPart = () => {
  return (
    <div className="texture">
      <div className="container pt-3">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className=" heightss">
              <div className="kiru">
                <div className="lock">
                  One App,{' '}
                  <span style={{ color: '#ED1B61' }}>all things Money</span>{' '}
                </div>
                <div className="we_make">
                  Make money moves with Black. Get paid from anywhere, access
                  your salary anytime, manage and grow your wealth
                </div>
                <div className="google_app">
                  <img src={g} alt="" className="btns" />
                  <img src={a} alt="" className="btns mmm" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="bg-warning">koko</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadPart;
