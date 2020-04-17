import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Display from './src/components/Display';
import Buttons from './src/components/Buttons';

export default function App() {
  const [value, setValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [first, setFirst] = useState('0');
  const [second, setSecond] = useState('');

  function handleButton(button) {
    switch (button) {
      case 'AC': {
        handleClearAll();
        break;
      }
      case 'C': {
        handleClear();
        break;
      }
      case 'X': {
        handleDelete();
        break;
      }
      case '=': {
        handleResult();
        break;
      }
      case '(±)': {
        handlePlusMinus();
        break;
      }
      case '+': {
        handleOperator(button);
        break;
      }
      case '-': {
        handleOperator(button);
        break;
      }
      case '×': {
        handleOperator(button);
        break;
      }
      case '÷': {
        handleOperator(button);
        break;
      }

      default: {
        if (value.length <= 7) {
          if (operator === '') {
            if (button === '.' && first === '0') {
              setFirst(value + button);
              setValue(value + button);
            } else if (value === '0') {
              setValue(button);
              setFirst(button);
            } else {
              setValue(value + button);
              setFirst(value + button);
            }
          } else if (operator !== '') {
            if (value === '') {
              setValue(button);
              setSecond(button);
            } else {
              setValue(value + button);
              setSecond(value + button);
            }
          }
        }
      }
    }
  }

  function handlePlusMinus() {
    if (value.indexOf('-') === 0) {
      if (operator === '') {
        setFirst(value.substr(1));
      } else {
        setSecond(value.substr(1));
      }

      return setValue(value.substr(1));
    }

    if (operator === '') {
      setFirst('-' + value);
    } else {
      setSecond('-' + value);
    }

    return setValue('-' + value);
  }

  function handleOperator(button) {
    if (operator === '') {
      setOperator(button);
      setValue('');
    }
  }

  function handleResult() {
    let one;
    let two;
    let result;
    let cont;

    one = parseFloat(first);
    two = parseFloat(second);

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
        result = result.toFixed(8);
        break;
      }
      default:
        break;
    }

    cont = result.toString();
    console.log(result);

    if (cont.length > 8) {
      setValue('0');
      setOperator('');
      setFirst('0');
      setSecond('');
      alert('Your operation exceeded 8 numbers');
    } else {
      setValue(cont);
      setFirst(cont);
      setOperator('');
    }
  }

  function handleDelete() {
    if (operator === '') {
      if (value.length === 1) {
        setValue('0');
        setFirst('0');
      } else if (value.length === 2) {
        setValue(value.substr(0, 1));
        setFirst(value.substr(0, 1));
      } else if (value.length === 3) {
        setValue(value.substr(0, 2));
        setFirst(value.substr(0, 2));
      } else if (value.length === 4) {
        setValue(value.substr(0, 3));
        setFirst(value.substr(0, 3));
      } else if (value.length === 5) {
        setValue(value.substr(0, 4));
        setFirst(value.substr(0, 4));
      } else if (value.length === 6) {
        setValue(value.substr(0, 5));
        setFirst(value.substr(0, 5));
      } else if (value.length === 7) {
        setValue(value.substr(0, 6));
        setFirst(value.substr(0, 6));
      } else if (value.length === 8) {
        setValue(value.substr(0, 7));
        setFirst(value.substr(0, 7));
      }
    } else if (value.length === 1) {
      setValue('0');
      setFirst('0');
    } else if (value.length === 2) {
      setValue(value.substr(0, 1));
      setSecond(value.substr(0, 1));
    } else if (value.length === 3) {
      setValue(value.substr(0, 2));
      setSecond(value.substr(0, 2));
    } else if (value.length === 4) {
      setValue(value.substr(0, 3));
      setSecond(value.substr(0, 3));
    } else if (value.length === 5) {
      setValue(value.substr(0, 4));
      setSecond(value.substr(0, 4));
    } else if (value.length === 6) {
      setValue(value.substr(0, 5));
      setSecond(value.substr(0, 5));
    } else if (value.length === 7) {
      setValue(value.substr(0, 6));
      setSecond(value.substr(0, 6));
    } else if (value.length === 8) {
      setValue(value.substr(0, 7));
      setSecond(value.substr(0, 7));
    }
  }

  function handleClear() {
    if (operator === '') {
      setValue('0');
      setFirst('0');
    } else if (operator !== '' && second !== '') {
      setValue('');
      setSecond('');
    } else if (operator !== '' && first !== '0') {
      setValue(first);
      setOperator('');
    }
  }

  function handleClearAll() {
    setValue('0');
    setOperator('');
    setFirst('0');
    setSecond('');
  }

  return (
    <View style={styles.container}>
      <Display value={value} />
      <Buttons handleButton={handleButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
