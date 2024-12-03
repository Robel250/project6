import React, { useState } from 'react';

const InputLogger = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const itemvalue = event.target.value;
    setInputValue(itemvalue); 
    console.log(itemvalue);   
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default InputLogger;
