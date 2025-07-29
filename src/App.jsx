
import './App.css'
import Display from './Components/Display.jsx'
import ButtonContainer from './Components/ButtomContainer.jsx'
import Header from './Components/Header.jsx'
import { useState } from 'react'

function App() {

  const [calVal, setcalVal] = useState("");


  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setcalVal('');
    } else if (buttonText === '=') {
      const res = eval(calVal);
      setcalVal(res);
    }
    else {
      const currentvalue = calVal + buttonText;
      setcalVal(currentvalue);

    }
  }

  return (
    <>
      <div
        id="calculator"
        className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      >
        <div className="w-80 rounded-2xl border-2 border-white bg-white/20 backdrop-blur-lg shadow-xl p-4">
          <Header />
          <Display displayValue={calVal} />
          <ButtonContainer onButtonClick={onButtonClick} />
        </div>
      </div>

    </>
  )
}

export default App
