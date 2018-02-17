import React from 'react';
import {
  node,
  number,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.div`${base}`;

const Icon = ({
  children,
  size,
  orientation
}) => {

  const orientations = {
    top: 0,
    right: 90,
    bottom: 180,
    left: -90
  };

  return (
    <BaseStyle
      size={size}
    >
      <svg
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={`rotate(${orientations[orientation]},50,50)`}>
          {children}
        </g>
      </svg>
    </BaseStyle>
  );
};

Icon.propTypes = {
  children: node,
  orientation: oneOf(['top', 'left', 'bottom', 'right']),
  size: number
};

Icon.defaultProps = {
  orientation: 'top'
};

export default Icon;
