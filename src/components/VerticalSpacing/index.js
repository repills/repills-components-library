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
    SIZE_SCALE_REM.mini,
    SIZE_SCALE_REM.small,
    SIZE_SCALE_REM.medium,
    SIZE_SCALE_REM.large,
    SIZE_SCALE_REM.xlarge,
    SIZE_SCALE_REM.mega
  ])
};
export default VerticalSpacing;
