import React, {useEffect, useState} from 'react';
import './App.css';
// import Input from './Input'

function App() {
  const [wholeNum, updateWholeNum] = useState(0); 
  const [numerator, updateNumerator] = useState(0); 
  const [denominator, updateDenominator] = useState(2); 

  useEffect(() => {
    // Update the document title using the browser API
    console.log(wholeNum, numerator, denominator);
  })

  const handleWholeNumber = (val, min, max, cb, e) => {
    val = parseInt(val);
    e.preventDefault();
    if (val < min) {
      return;
    } else if (val > max) {
      return;
    } else {
      cb(val);
    }
  }

  const Input = () => {
    return (
      <form>
        <WholeNumInput />
      </form>
    );
  }

  const WholeNumInput = () => {
    return (
      <div className='input_mono'>
        <label className='input_mono__label' htmlFor='wholeNum' >Whole Number</label>
        <input type="text" 
          // pattern="[0-9]*" 
          className='input_mono__input--text' 
          name='wholeNum' 
          value={wholeNum}
          min='0' 
          max='84'
          onChange={ (e) => handleWholeNumber(e.target.value, 0, 84, updateWholeNum, e) } />
        <button type='button' className='input_mono__button input_mono__button--minus' 
          onClick={(e) => handleWholeNumber(wholeNum - 1, 0, 84, updateWholeNum, e) }>
            -
        </button>
        <button type='button' className='input_mono__button input_mono__button--plus'
          onClick={(e) => handleWholeNumber(wholeNum + 1, 0, 84, updateWholeNum, e) }>
          +
        </button>
  
      </div>
    );
  }

  return (
    <>
      <Input wholeNum={wholeNum} numerator={numerator} denominator={denominator} />
      <div className='output'>
        {wholeNum}{ 
          (numerator > 0) ? `-${numerator}/${Math.pow(2, denominator)}` : ''
        }
      </div>
    </>
  );
}

export default App;
