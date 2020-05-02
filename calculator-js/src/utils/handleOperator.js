export default function handleOperator(
  button,
  operator,
  history,
  setValue,
  setOperator,
  setHistory
) {
  if (operator === '') {
    setOperator(button);
    setValue('');

    setHistory(history + button);
  }
}
