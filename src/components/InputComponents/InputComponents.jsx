import React from 'react';

const InputComponents = (props) => {
  return (
      <input
          required={props.required}
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          className={props.class}
          onBlur={props.inputOnBlur}
      />
  )
};

export default InputComponents;
