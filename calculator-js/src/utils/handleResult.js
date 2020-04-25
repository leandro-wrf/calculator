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
    let resp;
    let tree;

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
        tree = result.toString();
        if (tree.length > 6) {
          result = parseFloat(tree);
          result = result.toPrecision(5);
        }
        break;
      }
      default:
        break;
    }

    resp = result.toString();

    if (resp.length > 12) {
      setValue('0');
      setOperator('');
      setFirst('0');
      setSecond('');
      setHistory('');
      alert('Your operation exceeded 12 numbers');
    } else {
      setValue(resp);
      setFirst(resp);
      setHistory(history + '=' + resp);
      setOperator('');
    }
  }