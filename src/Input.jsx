import React from 'react';

const handleWholeNumber = (val, min, max, cb, e) => {
  e.preventDefault();
  val = parseInt(val);
  if (!val) { 
    val = 0; 
  }
  if (val < min) {
    return;
  } else if (val > max) {
    return;
  } else {
    cb(val);
  }
}

const WholeNumInput = ({wholeNum, updateWholeNum}) => {
  return (
    <div className='input input--wholeNum'>
      <label className='input__label' htmlFor='wholeNum' >Whole Number (0-96): {wholeNum}</label>
      <input type="text" 
        pattern="[0-9]*" 
        className='input__input--text' 
        name='wholeNum' 
        value={wholeNum}
        min='0' 
        max='96'
        onChange={ (e) => handleWholeNumber(e.target.value, 0, 96, updateWholeNum, e) } />
      <button type='button' className='input__button input__button--minus' 
        onClick={(e) => handleWholeNumber(wholeNum - 1, 0, 96, updateWholeNum, e) }>
          -
      </button>
      <button type='button' className='input__button input__button--plus'
        onClick={(e) => handleWholeNumber(wholeNum + 1, 0, 96, updateWholeNum, e) }>
        +
      </button>

    </div>
  );
}

const NumeratorInput = ({numerator, denominator, updateNumerator}) => {
  return (
    <div className='input input--numerator'>
      <label className='input__label' htmlFor='numerator' >Numerator (0-{Math.pow(2, denominator)}): {numerator}</label>
      <input type="range" 
        className='input__input--slider' 
        name='numerator' 
        value={numerator}
        min='0' 
        max={Math.pow(2, denominator)}
        onChange={ (e) => handleWholeNumber(e.target.value, 0, Math.pow(2, denominator), updateNumerator, e) } />
      <button type='button' className='input__button input__button--minus' 
        onClick={(e) => handleWholeNumber(numerator - 1, 0, Math.pow(2, denominator), updateNumerator, e) }>
          -
      </button>
      <button type='button' className='input__button input__button--plus'
        onClick={(e) => handleWholeNumber(numerator + 1, 0, Math.pow(2, denominator), updateNumerator, e) }>
        +
      </button>

    </div>
  );
}

const DenominatorInput = ({denominator, updateDenominator}) => {
  return (
    <div className='input input--denominator' input>
      <label className='input__label' htmlFor='denominator' >Denominator (2-64): {Math.pow(2, denominator)}</label>
      <input type="range" 
        className='input__input--slider' 
        name='denominator' 
        value={denominator}
        min='1' 
        max='6'
        onChange={ (e) => handleWholeNumber(e.target.value, 1, 6, updateDenominator, e) } />
      <button type='button' className='input__button input__button--minus' 
        onClick={(e) => handleWholeNumber(denominator - 1, 1, 6, updateDenominator, e) }>
          -
      </button>
      <button type='button' className='input__button input__button--plus'
        onClick={(e) => handleWholeNumber(denominator + 1, 1, 6, updateDenominator, e) }>
        +
      </button>

    </div>
  );
}

export {DenominatorInput, NumeratorInput, WholeNumInput};