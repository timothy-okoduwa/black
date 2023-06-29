import React, { useState, useRef } from 'react';
import fiv from './images/fiveus.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
// import Input, {
//   getCountries,
//   getCountryCallingCode,
// } from 'react-phone-number-input/input';
// import countryNames from 'react-phone-number-input/locale/en';
import emailjs from '@emailjs/browser';
const WaitList = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [fullname, setFullname] = useState('');
  const [loading, setLoading] = useState(false);

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_o4ifcqj',
        'template_agtires',
        form.current,
        'OQI2gNcn7IiuU3GNA'
      )
      .then(
        (result) => {
          setPhoneNumber('');
          setEmail('');
          setFullname('');
          setLoading(false);
          alert('you have been added to the waitlist');
        },
        (error) => {
          alert(error.text);
        }
      );
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

            <form className="for_form" ref={form} onSubmit={sendEmail}>
              <div>
                <div className="mb-4">
                  <div className="label">Full Name</div>
                  <input
                    type="text"
                    className="inppp"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <div className="label">Phone number</div>
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="CM"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    className="inppp2"
                    required
                    name="phonenumber"
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
                    name="emailaddress"
                  />
                  {emailError && <div className="error">{emailError}</div>}
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <button
                    className="bububu"
                    onClick={validateEmail}
                    type="submit"
                    value="Send"
                  >
                    {loading ? '  adding to waitlist' : 'Join Waitlist  '}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WaitList;
