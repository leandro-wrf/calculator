export default function handlePlusMinus(
	value,
	operator,
	setValue,
	setFirst,
	setSecond
	) {
    	if (value.indexOf('-') === 0) {
      	if (operator === '') {
        	setFirst(value.substr(1));
      	} 	else {
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