import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Display from './src/components/Display';
import Buttons from './src/components/Buttons';
import handleClearAll from './src/utils/handleClearAll';
import handleClear from './src/utils/handleClear';
import handleDelete from './src/utils/handleDelete';
import handleResult from './src/utils/handleResult';
import handlePlusMinus from './src/utils/handlePlusMinus';
import handleOperator from './src/utils/handleOperator.js';
import handleButtonPress from './src/utils/handleButtonPress';

export default function App() {
  const [value, setValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [first, setFirst] = useState('0');
  const [second, setSecond] = useState('');
  const [history, setHistory] = useState('');

  function handleModules(button) {
    if(button === 'AC')
      handleClearAll(setValue, setOperator, setFirst, setSecond, setHistory);
    else if(button === 'C')
          handleClear(
            operator,
            first,
            second,
            setValue,
            setOperator,
            setFirst,
            setSecond
          );
    else if(button === 'X')
          handleDelete(
            operator,
            value,
            setValue,
            setFirst,
            setSecond
          );
    else if(button === '=')
          handleResult(
            operator,
            first,
            second,
            history,
            setValue,
            setOperator,
            setFirst,
            setSecond,
            setHistory
          );
    else if(button === '(±)')
          handlePlusMinus(value, operator, setValue, setFirst, setSecond);
    else if(button === '+' || button === '-' || button === '×' || button === '÷')
          handleOperator(
            button, 
            operator, 
            history, 
            setValue, 
            setOperator,
            setHistory
          );
    else handleButtonPress(
          button,
          value,
          operator,
          first,
          history,
          setValue,
          setFirst,
          setSecond,
          setHistory
        );
  }

  return (
    <View style={styles.container}>
      <Display value={value} history={history} />
      <Buttons handleModules={handleModules} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
