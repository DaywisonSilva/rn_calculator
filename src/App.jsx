import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

const App = () => {
  const [value, setValue] = useState('0');

  const addDigit = n => {
    const formatedValue = value.split('');
    if (formatedValue[0] == 0) formatedValue.shift();
    setValue(formatedValue.join('') + n);
  };

  const clearMemory = () => {
    setValue('0');
  };

  const setOperation = operation => {};

  return (
    <SafeAreaView style={style.container}>
      <Display value={value} />
      <View style={style.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={() => addDigit('/')} />
        <Button label="7" onClick={() => addDigit('7')} />
        <Button label="8" onClick={() => addDigit('8')} />
        <Button label="9" onClick={() => addDigit('9')} />
        <Button label="*" operation onClick={() => addDigit('*')} />
        <Button label="4" onClick={() => addDigit('4')} />
        <Button label="5" onClick={() => addDigit('5')} />
        <Button label="6" onClick={() => addDigit('6')} />
        <Button label="-" operation onClick={() => addDigit('-')} />
        <Button label="1" onClick={() => addDigit('1')} />
        <Button label="2" onClick={() => addDigit('2')} />
        <Button label="3" onClick={() => addDigit('3')} />
        <Button label="+" operation onClick={() => addDigit('+')} />
        <Button label="0" onClick={() => addDigit('0')} />
        <Button label="." onClick={() => addDigit('.')} />
        <Button label="=" double operation />
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
