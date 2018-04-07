import React from 'react';
import {
  node,
  oneOf
} from 'prop-types';
import { SIZE_SCALE_REM } from '../../config/spacing';

const VerticalSpacing = ({
  children,
  size
}) => (
  <div style={{ marginTop: SIZE_SCALE_REM[size] }}>
    {children}
  </div>
);
VerticalSpacing.propTypes = {
  children: node,
  size: oneOf([
    'mini',
    'small',
    'medium',
    'large',
    'xlarge',
    'mega'
  ])
};
export default VerticalSpacing;
