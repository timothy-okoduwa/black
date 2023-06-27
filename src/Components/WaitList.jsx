import React, { useState } from 'react';
import fiv from './images/fiveus.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { getCountryCallingCode } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
const WaitList = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
    } else if (!regex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      // Email is valid
      setEmailError('');
      // Perform further actions, such as submitting the form
    }
  };

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
              <img
                src={fiv}
                alt=""
                style={{ width: '70%', objectFit: 'contain' }}
              />
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
                  <input
                    type="email"
                    className="inppp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <div className="error">{emailError}</div>}
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <button className="bububu" onClick={validateEmail}>
                    Join Waitlist
                  </button>
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
