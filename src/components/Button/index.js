import React from 'react';
import {
  string,
  bool,
  func,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

// @TODO covert in to class

const Button = ({
  autoWidth,
  disabled,
  ellipsis,
  expanded,
  label,
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
  skin,
  size,
  ...others
}) => {
  const BaseStyle = styled(href ? 'a' : 'button')`${base}`;
  const click = e => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };
  return (
    <BaseStyle
      autoWidth={autoWidth}
      disabled={disabled}
      ellipsis={ellipsis}
      expanded={expanded}
      href={href ? href : undefined}
      onClick={onClick ? click : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      size={size}
      skin={skin}
      {...others}
    >
      {label && <span>{label}</span>}
    </BaseStyle>
  );
};

Button.propTypes = {
  autoWidth: bool,
  disabled: bool,
  ellipsis: bool,
  expanded: bool,
  href: string,
  label: string,
  onClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
  size: oneOf(['S', 'M', 'L']),
  skin: oneOf(['default', 'ghost', 'primary', 'outline', 'outlineLight'])
};

Button.defaultProps = {
  size: 'M',
  skin: 'default'
};

export default Button;

