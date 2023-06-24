import React from 'react';
import './Black.css';
import HeadPart from '../../Components/HeadPart';
import MobileBanking from '../../Components/MobileBanking';
import Clientel from '../../Components/Clientel';
import Reliable from '../../Components/Reliable';
import ShowMobile from '../../Components/ShowMobile';
const Black = () => {
  return (
    <div>
      <HeadPart />
      <div className="hidden">
        <MobileBanking />
      </div>
      <div className="hid_for_web">
        <ShowMobile />
      </div>
      <Clientel />
      <Reliable />
    </div>
  );
};

export default Black;
