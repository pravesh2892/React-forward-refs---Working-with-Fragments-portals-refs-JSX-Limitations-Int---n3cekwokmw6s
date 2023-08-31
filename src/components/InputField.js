import React, { useRef, useState, useEffect, forwardRef } from 'react'; 
import '../styles/App.css';

const InputField = forwardRef((props, ref) => {
  return (
    <div>
      <input id="input" type="text" ref={ref} /> 
    </div>
  );
});

export default InputField;
