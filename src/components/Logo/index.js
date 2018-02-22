import React from 'react';
import {
  string,
  oneOf,
  number
} from 'prop-types';
import { extRem } from '../../utils';
const availableVariants = ['full', 'minimal'];

function getVariant(variant) {
  return availableVariants.includes(variant) ? variant : 'full';
}

const Logo = ({
  color,
  size,
  variant
}) => {

  const _fileName = getVariant(variant);
  const { path, viewBox } = require(`./assets/${_fileName}`);

  return (
    <svg
      style={{ width: size ? extRem(size) : '100%'}}
      viewBox={viewBox}
    >
      <path
        d={path}
        fill={color || 'currentColor'}
      />
    </svg>
  );
};

Logo.propTypes = {
  color: string,
  size: number,
  variant: oneOf(availableVariants)
};

export default Logo;

