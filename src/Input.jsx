import React, {useState} from 'react';

const Input = (props) => {
  return (
    <form>
      <InputSet name='wholeNum' type='number' value={props.wholeNum} />
      <InputSet name='numerator' type='number' value={props.numerator} />
      <InputSet name='denominator' type='number' value={props.denominator} />
    </form>
  );
}

const InputSet = (props) => {
  return (
    <div className='input_mono'>
      <label className='input_mono__label' htmlFor={props.name} >{props.name}</label>
      <input className='input_mono__text' type={props.type} name={props.name} />
      <button className='input_mono__button input_mono__button--minus'>-</button>
      <button className='input_mono__button input_mono__button--plus'>+</button>

    </div>
  );
}

export default Input;