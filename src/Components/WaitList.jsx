import React, { useState } from 'react';
import fiv from './images/fiveus.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
const WaitList = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <div>
      <div className="troubb" id="waitlist">
        <div className="container">
          <div className="center_all">
            <div className="twiw">
              <div className="jionn">
                {' '}
                Join thousands of money movers on the waitlist
              </div>
            </div>
            <div className="muttt">
              <img src={fiv} alt="" style={{ width: '100%' }} />
            </div>

            <div className="for_form">
              <div>
                <div className="mb-4">
                  <div className="label">Full Name</div>
                  <input type="text" className="inppp" />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <div className="label">Phone number</div>
                  {/* <input type="text" className="inppp" /> */}
                  <PhoneInput
                    defaultCountry="CM"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    className="inppp2"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <div className="label">Email Address</div>
                  <input type="text" className="inppp" />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <button className="bububu">Join Waitlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WaitList;
