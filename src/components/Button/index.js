import React from 'react';
import { string, bool, func } from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.button`${base}`;

const Button = ({
  disabled,
  expanded,
  id,
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
      id={id}
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
  id: string,
  label: string,
  onClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
  outline: bool,
  size: string
};

Button.defaultProps = {
  disabled: false,
  size: 'M',
  type: 'primary',
  outline: false,
  expanded: false
};

export default Button;

