import { useState } from 'react';

const useInput = (validationCb) => {

    const [inputValue, setInputValue] = useState('');
    const [wasTouched, setWasTouched] = useState(false);
    
    const hasError = !validationCb(inputValue) && wasTouched;

    const inputBlurHandler = () => {
        setWasTouched(true);   
    }

    const inputChangeHandler = e => {
        setInputValue(e.target.value);
    }

    return {
        inputValue,
        blurHandler: inputBlurHandler,
        changeHandler: inputChangeHandler,
        hasError
    };

}

export default useInput;