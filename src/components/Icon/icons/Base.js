import React from 'react';
import {
  string,
  number
} from 'prop-types';
import Icon from '../index';

const Base = ({
  color,
  orientation,
  path,
  size
}) => {
  return (
    <Icon
      orientation={orientation}
      size={size}
    >
      <path
        d={path}
        fill={color || 'currentColor'}
      />
    </Icon>
  );
};

Base.propTypes = {
  color: string,
  orientation: Icon.propTypes.orientation,
  path: string,
  size: number
};

export default Base;
