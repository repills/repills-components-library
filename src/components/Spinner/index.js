import React from 'react';
import { oneOf } from 'prop-types';
import styled from 'styled-components';
import theme from '../../config/theme';

import {
  base
} from './style';

const BaseStyle = styled.div`${base}`;

const Spinner = ({
  position
}) => {
  return (
    <BaseStyle position={position} >
      <svg
        enableBackground="new 0 0 40 40"
        height="40px"
        viewBox="0 0 40 40"
        width="40px"
      >
        <path
          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
          fill="#000"
          opacity="0.2"
        />
        <path
          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
          C22.32,8.481,24.301,9.057,26.013,10.047z"
          fill="#000"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            dur="0.5s"
            from="0 20 20"
            repeatCount="indefinite"
            to="360 20 20"
            type="rotate"
          />
        </path>
      </svg>
    </BaseStyle>
  );
};

Spinner.propTypes = {
  position: oneOf([
    'relative',
    'absolute',
    'fixed'
  ])
};

Spinner.defaultProps = {
  position: 'relative'
};

export default Spinner;