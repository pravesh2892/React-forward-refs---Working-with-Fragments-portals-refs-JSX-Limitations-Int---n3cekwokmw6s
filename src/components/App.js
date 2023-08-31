import React, { useRef, useState, useEffect } from 'react';
import '../styles/App.css';
import InputField from './InputField.js';

const App = () => {
  const inputRef = useRef(); 
  const textareaRef = useRef(); 
  const [values, setValues] = useState('');

 
  const settingValue = () => {
    const inputValue = inputRef.current.value;
    setValues(inputValue);
  };


  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <InputField ref={inputRef} /> {/* Pass the inputRef to InputField */}
      <br />
      <button id="settingValueButton" onClick={settingValue}>
        Set Value
      </button>
      <button id="focusInputButton" onClick={focusInput}>
        Focus the input
      </button>
      <br />
      <br />
      <textarea id="textarea" value={values} ref={textareaRef} />
    </div>
  );
};

export default App;
