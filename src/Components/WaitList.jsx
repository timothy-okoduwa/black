import React, { useState, useRef } from 'react';
import fiv from './images/fiveus.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
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

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   emailjs
  //     .sendForm(
  //       'service_o4ifcqj',
  //       'template_agtires',
  //       form.current,
  //       'OQI2gNcn7IiuU3GNA'
  //     )
  //     .then(
  //       (result) => {
  //         setPhoneNumber('');

  //         setLoading(false);
  //         alert('you have been added to the waitlist');
  //         sendConfirmationEmail();
  //       },
  //       (error) => {
  //         alert(error.text);
  //       }
  //     );
  // };
  // const sendConfirmationEmail = () => {
  //   emailjs
  //     .send(
  //       'service_o4ifcqj',
  //       'template_p36zxdi',
  //       {
  //         to_name: fullname,
  //         to_email: email,
  //       },
  //       'OQI2gNcn7IiuU3GNA'
  //     )
  //     .then(
  //       (result) => {
  //         console.log('Confirmation email sent', result);
  //         // setEmail('');
  //         // setFullname('');
  //       },
  //       (error) => {
  //         console.log('Failed to send confirmation email:', error);
  //       }
  //     );
  // };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        'service_o4ifcqj',
        'template_agtires',
        form.current,
        'OQI2gNcn7IiuU3GNA'
      );
      setPhoneNumber('');
      setEmail('');
      setFullname('');
      setLoading(false);
      alert('You have been added to the waitlist');
      await sendConfirmationEmail();
    } catch (error) {
      alert(error.text);
    }
  };

  const sendConfirmationEmail = async () => {
    try {
      await emailjs.send(
        'service_o4ifcqj',
        'template_p36zxdi',
        {
          to_name: fullname,
          to_email: email,
        },
        'OQI2gNcn7IiuU3GNA'
      );
      console.log('Confirmation email sent');
    } catch (error) {
      console.log('Failed to send confirmation email:', error);
    }
  };

  const isButtonDisabled = !email || !phoneNumber || !fullname;

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
                    className={`bububu ${isButtonDisabled ? 'disabled' : ''}`}
                    onClick={validateEmail}
                    type="submit"
                    value="Send"
                    disabled={isButtonDisabled}
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
