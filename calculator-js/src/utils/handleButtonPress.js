import handlePreviewResult from './handlePreviewResult';

export default function handleButtonPress(
  button,
  value,
  operator,
  first,
  history,
  setValue,
  setFirst,
  setSecond,
  setHistory,
  setPreview
) {
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
      const second = value + button;
      handlePreviewResult(first, second, operator, setPreview);
    }
  }
  setHistory(history + button);
}
