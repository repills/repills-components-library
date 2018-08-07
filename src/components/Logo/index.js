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
  secondaryColor,
  size,
  variant
}) => {

  const _fileName = getVariant(variant);
  const { path, secondaryPath, viewBox } = require(`./assets/${_fileName}`);

  return (
    <div style={{ display: 'block', lineHeight: 0 }} >
      <svg
        style={{ width: size ? extRem(size) : '100%' }}
        viewBox={viewBox}
      >
        <path
          d={path}
          fill={color || 'currentColor'}
        />
        {
          secondaryPath &&
          <path
            d={secondaryPath}
            fill={secondaryColor || 'currentColor'}
          />
        }
      </svg>
    </div>
  );
};

Logo.displayName = 'Logo';

Logo.propTypes = {
  color: string,
  secondaryColor: string,
  size: number,
  variant: oneOf(availableVariants)
};

export default Logo;

