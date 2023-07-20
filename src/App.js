import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputField from './InputField';
import Button from './Button';

const App = () => {
  const { inputValue1, inputValue2, result, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event, field) => {
    dispatch({
      type: 'UPDATE_INPUT',
      payload: {
        field,
        value: event.target.value,
      },
    });
  };

  const handleOperation = (operator) => {
    dispatch({
      type: 'CALCULATE',
      payload: {
        operator,
      },
    });
  };

  return (
    <div>
      <InputField value={inputValue1} onChange={(e) => handleChange(e, 'inputValue1')} />
      <InputField value={inputValue2} onChange={(e) => handleChange(e, 'inputValue2')} />
      <Button text="+" onClick={() => handleOperation('+')} />
      <Button text="-" onClick={() => handleOperation('-')} />
      <Button text="*" onClick={() => handleOperation('*')} />
      <Button text="/" onClick={() => handleOperation('/')} />
      {error && <div>{error}</div>}
      {result !== null && <div>Результат: {result}</div>}
    </div>
  );
};

export default App;



