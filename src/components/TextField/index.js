import React from 'react';
import styled from 'styled-components';
import {
  string,
  bool,
  func,
  number,
  oneOf,
  oneOfType
} from 'prop-types';
import { CheckedIcon, ErrorIcon } from '../Icon/icons/basic';
import {
  base,
  icon,
  input
} from './style';

const BaseStyle = styled.div`${base}`;
const InputStyle = styled.input`${input}`;
const IconStyle = styled.div`${icon}`;

const TextField = ({
  dirty,
  disabled,
  expanded,
  handleOnBlur,
  handleOnChange,
  handleOnFocus,
  hasError,
  id,
  name,
  placeholder,
  readOnly,
  required,
  size,
  type,
  value
}) => {

  const hasIcon = dirty && typeof(hasError) === 'boolean';

  const iconSize = {
    M: 24,
    L: 28
  };

  return (
    <BaseStyle
      disabled={disabled}
      expanded={expanded}
      filled={value && value.length !== 0}
      hasError={hasError}
      size={size}
    >
      {
        hasIcon &&
        <IconStyle
          hasError={hasError}
          size={size}
        >
          { hasError ? <ErrorIcon size={iconSize[size]} /> : <CheckedIcon size={iconSize[size]} /> }
        </IconStyle>
      }
      <InputStyle
        disabled={disabled}
        hasIcon={hasIcon}
        id={id}
        name={name}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        size={size}
        type={type}
        value={value}
      />
    </BaseStyle>
  );
};

TextField.defaultProps = {
  placeholder: '',
  type: 'text',
  value: '',
  size: 'M'
};

TextField.propTypes = {
  dirty: bool,
  disabled: bool,
  expanded: bool,
  handleOnBlur: func,
  handleOnChange: func,
  handleOnFocus: func,
  hasError: bool,
  id: string,
  name: string,
  placeholder: string,
  readOnly: bool,
  required: bool,
  size: oneOf(['M', 'L']),
  type: oneOf(['text', 'number', 'url', 'date', 'datetime']),
  value: oneOfType([string, number])
};

export default TextField;
