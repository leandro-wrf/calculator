import handleAlert from './handleAlert';

export default function handleResult(
  operator,
  first,
  second,
  history,
  setValue,
  setOperator,
  setFirst,
  setSecond,
  setHistory
) {
  let result;
  let resultFixedDivision;

  const one = parseFloat(first);
  const two = parseFloat(second);

  switch (operator) {
    case '+': {
      result = one + two;
      break;
    }
    case '-': {
      result = one - two;
      break;
    }
    case '×': {
      result = one * two;
      break;
    }
    case '÷': {
      result = one / two;
      resultFixedDivision = result.toString();
      if (resultFixedDivision.length > 6) {
        result = parseFloat(resultFixedDivision);
        result = result.toPrecision(5);
      }
      break;
    }
    default:
      break;
  }

  const resultString = result.toString();

  if (resultString.length > 12) {
    setValue('0');
    setOperator('');
    setFirst('0');
    setSecond('');
    setHistory('');
    alert('por enquanto 12 digits');
  } else {
    setValue(resultString);
    setFirst(resultString);
    setHistory(`${history} = ${resultString}`);
    setOperator('');
  }
}
