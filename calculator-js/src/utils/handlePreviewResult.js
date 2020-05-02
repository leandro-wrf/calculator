export default function (first, second, operator, setPreview) {
  const firstNumber = parseFloat(first);
  const secondNumber = parseFloat(second);
  let result;

  if (operator !== '')
    switch (operator) {
      case '+': {
        result = firstNumber + secondNumber;
        break;
      }
      case '-': {
        result = firstNumber - secondNumber;
        break;
      }
      case '×': {
        result = firstNumber * secondNumber;
        break;
      }

      case '÷': {
        result = firstNumber / secondNumber;
        break;
      }

      default:
        result = '';
    }

  if (result.length > 12) {
    return setResult('');
  }

  result = result.toString();
  return setPreview(result);
}
