export default function handleClear(
	operator, 
	first, 
	second, 
	setValue, 
	setOperator, 
	setFirst, 
	setSecond
) {
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