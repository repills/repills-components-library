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
      size={size}
      skin={skin}
      {...others}
    >
      {label && <span>{label}</span>}
    </BaseStyle>
  );
};

Button.propTypes = {
  /** Boolean indicating whether the button should have the standard width (according to the size parameter) or not. */
  autoWidth: bool,
  /** Boolean indicating whether the button should render as disabled. 'onClick' event won't be triggered while in this state. */
  disabled: bool,
  ellipsis: bool,
  expanded: bool,
  href: string,
  /** Name of the icon to use. */
  icon: string,
  /** Name of the icon to place on right side of button. */
  iconRight: string,
  /** Button label. */
  label: string,
  /** Triggered on button click/tap, if button is not disabled. */
  onClick: func,
  size: oneOf(['S', 'M', 'L']),
  skin: oneOf(['default', 'ghost', 'primary', 'outline', 'outlineLight', 'outlineTertiary'])
};

Button.defaultProps = {
  size: 'M',
  skin: 'default'
};

export default Button;

