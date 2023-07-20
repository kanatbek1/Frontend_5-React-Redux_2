import { createStore } from 'redux';

const initialState = {
  inputValue1: '',
  inputValue2: '',
  result: null,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        result: null,
        error: '',
      };
    case 'CALCULATE':
      const { inputValue1, inputValue2 } = state;
      if (!inputValue1 || !inputValue2) {
        return {
          ...state,
          error: 'Пожалуйста, заполните оба поля!',
        };
      }
      const result = eval(`${inputValue1}${action.payload.operator}${inputValue2}`);
      return {
        ...state,
        result,
        error: '',
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
