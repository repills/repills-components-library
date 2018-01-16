import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.div`${base}`;

const Icon = ({
  children,
  color,
  size
}) => {
  return (
    <BaseStyle
      color={color}
      size={size}
    >
      <svg
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {children}
      </svg>
    </BaseStyle>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.number
};

export default Icon;
