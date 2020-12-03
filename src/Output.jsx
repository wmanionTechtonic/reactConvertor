import React from 'react'

const Output = ({denominator, numerator, wholeNum}) => {
  return (
    <div className='output'>
      <div>
        { (!wholeNum && !numerator) ? `0` : ''}
        { wholeNum ? `${wholeNum}` : ''}
        { (wholeNum && numerator) ? '-' : ''}
        { numerator ? `${simplify(numerator.toString() + '/' + denominator.toString())}` : '' }"
      </div>
      <div>
      {wholeNum + (numerator / denominator)}"
      </div>
      <div>
        {(wholeNum + (numerator / denominator)).toFixed(3)}" (thousandths)
      </div>
      <div>
        {((wholeNum + (numerator / denominator)) * 25.4).toFixed(2)}mm (hundredths)
      </div>
      <div>
        {metricUnder(wholeNum + numerator / denominator)}
      </div>
      <div>
        {metricOver(wholeNum + numerator / denominator)}
      </div>
    </div>
  );
}

function metricUnder(inches) {
  let mmUndershot = Math.floor(inches*25.4);
  let mmExact = inches * 25.4;
  return `${mmUndershot}mm+${((mmExact - mmUndershot) / 25.4).toFixed(3)}"`;
}

function metricOver(inches) {
  let mmOvershot = Math.ceil(inches*25.4);
  let mmExact = inches * 25.4;
  return `${mmOvershot}mm-${((mmOvershot - mmExact) / 25.4).toFixed(3)}"`
  // return `${Math.ceil(inches*25.4)}mm-${(((inches*25.4)-Math.floor(inches*25.4))/25.4).toFixed(3)}"`;
}

// https://www.geeksforgeeks.org/reduce-a-fraction-to-its-simplest-form-by-using-javascript/
function simplify(str) { 
  var result = '', data = str.split('/'),  
  numOne = Number(data[0]),  
  numTwo = Number(data[1]); 
  for (var i = Math.max(numOne, numTwo); i > 1; i--) { 
    if ((numOne % i === 0) && (numTwo % i === 0)) { 
      numOne /= i; 
      numTwo /= i;
    }
  } 
  if (numTwo === 1) { 
    result = numOne.toString() 
  } else { 
  result = numOne.toString() + '/' + numTwo.toString() 
  } 
  return result 
}

export default Output;