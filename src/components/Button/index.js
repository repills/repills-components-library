import React from 'react';
import { string, bool, func, oneOf } from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.button`${base}`;

const Button = ({
  disabled,
  expanded,
  label,
  onClick,
  onMouseEnter,
  onMouseLeave,
  outline,
  size,
  ...otherOptions
}) => {
  return (
    <BaseStyle
      disabled={disabled}
      expanded={expanded}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      outline={outline}
      size={size}
      {...otherOptions}
    >
      {label && <span>{label}</span>}
    </BaseStyle>
  );
};

Button.propTypes = {
  disabled: bool,
  expanded: bool,
  label: string,
  onClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
  outline: bool,
  size: oneOf(['S', 'M'])
};

Button.defaultProps = {
  size: 'M'
};

export default Button;

