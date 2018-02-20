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
import { CheckIcon, ErrorIcon } from '../Icon/icons/basic';
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
  hasError,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readOnly,
  required,
  size,
  type,
  value
}) => {

  const hasIcon = dirty && typeof(hasError) === 'boolean';

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
          { hasError ? <ErrorIcon size={16} /> : <CheckIcon size={16} /> }
        </IconStyle>
      }
      <InputStyle
        disabled={disabled}
        hasIcon={hasIcon}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
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
  hasError: bool,
  id: string,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  placeholder: string,
  readOnly: bool,
  required: bool,
  size: oneOf(['M', 'L']),
  type: oneOf(['text', 'number']),
  value: oneOfType([string, number])
};

export default TextField;
