import React, { useState } from 'react';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar/NavBar';
import Black from './pages/Black/Black';

function App() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <NavBar step={step} setStep={setStep} />
      <Black step={step} setStep={setStep} />
      <Footer />
    </div>
  );
}

export default App;
