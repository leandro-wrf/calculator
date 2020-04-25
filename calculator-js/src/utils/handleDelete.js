export default function handleDelete(
	operator,
	value,
	setValue,
	setFirst,
	setSecond,
	) {
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
      setSecond('0');
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