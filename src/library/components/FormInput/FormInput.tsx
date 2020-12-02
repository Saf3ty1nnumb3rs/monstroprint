import React from 'react';
import { InputProps } from 'library/types/BaseComponentTypes';
import 'scss/components/_FormInput.scss';

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}: InputProps): React.ReactElement => {
  const valueLength = otherProps.value?.length ? 'shrink' : '';
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${valueLength} form-input-label`}>{label}</label>
      ) : null}
    </div>
  );
};

export default FormInput;
