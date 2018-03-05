import React from 'react';
import {
  string,
  bool,
  func,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.button`${base}`;

const Button = ({
  autoWidth,
  disabled,
  expanded,
  label,
  onClick,
  onMouseEnter,
  onMouseLeave,
  skin,
  size,
  ...otherOptions
}) => {
  return (
    <BaseStyle
      autoWidth={autoWidth}
      disabled={disabled}
      expanded={expanded}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      size={size}
      skin={skin}
      {...otherOptions}
    >
      {label && <span>{label}</span>}
    </BaseStyle>
  );
};

Button.propTypes = {
  autoWidth: bool,
  disabled: bool,
  expanded: bool,
  label: string,
  onClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
  size: oneOf(['S', 'M', 'L']),
  skin: oneOf(['default', 'ghost'])
};

Button.defaultProps = {
  size: 'M',
  skin: 'default'
};

export default Button;

