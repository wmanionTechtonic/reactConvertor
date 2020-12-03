import React, {useState} from 'react';
import {WholeNumInput} from './Input';
import {NumeratorInput} from './Input';
import {DenominatorInput} from './Input';
import Output from './Output'
import './App.css';

function App() {
  const [wholeNum, updateWholeNum] = useState(0); 
  const [numerator, updateNumerator] = useState(0); 
  const [denominator, updateDenominator] = useState(4); 

  return (
    <>
      <form class='input input__container'>
        <WholeNumInput wholeNum={wholeNum} updateWholeNum={updateWholeNum} />
        <NumeratorInput numerator={numerator} updateNumerator={updateNumerator} denominator={denominator} />
        <DenominatorInput denominator={denominator} updateDenominator={updateDenominator} />        
      </form>
      <Output denominator={Math.pow(2, denominator)} numerator={numerator} wholeNum={wholeNum} />
    </>
  );
}

export default App;
