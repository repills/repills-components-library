import React from 'react';
import { string } from 'prop-types';
import theme from '../../config/theme';

const Logo = ({
  color
}) => (
  <svg
    viewBox="0 0 430 89"
  >
    <path
      d="M288.7,9.79a8.25,8.25,0,1,1,16.5,0q0,.25,0,.51A8,8,0,0,1,296.95,18h-.51A8,8,0,0,1,288.7,9.79ZM130.35,56.55l16,23.82H132.68l-13-21.6c-1,.1-2.14.1-3.26.1h-17v21.5h-12V9.07h28.94c18.24,0,28.73,8.86,28.73,24.35C145.11,44.84,139.81,52.88,130.35,56.55Zm3.35-22.82v0c0-9.37-6.32-13.86-17.32-13.86H99.47V48.1h16.91C127.38,48.1,133.7,43.41,133.7,33.73ZM353.29,80.39h18.13V4.8H353.26Zm-33,0h18.1V4.8H320.25Zm79.53-39.83h0c0-2.34,2.14-3.46,5.2-3.46,4.48,0,10.7,2,17.52,5.6l6.11-11.82a44.76,44.76,0,0,0-22.92-6.42c-12.94,0-22.62,6.32-22.62,17.83,0,19,28.42,15.28,28.42,22.82,0,2.24-2.45,3.36-5.81,3.36-6.11,0-13.25-2.45-19.56-6.83l-5.73,11.69c6.72,5.2,15.59,7.84,24.86,7.84,13.45,0,23.33-6.42,23.33-17.73C428.76,44.32,399.82,47.79,399.82,40.56ZM208.08,57.77v-.06h-41c1.87,8.42,8.29,13.61,16.81,13.61A21.07,21.07,0,0,0,199.17,65l6.21,6.62c-5.3,5.81-13,9.17-22.41,9.17-16.71,0-27.71-11.11-27.71-27.41s11.31-27.51,27.41-27.61C201.76,25.78,209.5,38.21,208.08,57.77Zm-10.19-8.55c-.41-8.76-6.21-14.06-15.08-14.06-8.56,0-14.67,5.4-15.89,14.06ZM278.68,34c0,16.81-10.49,26.59-28.73,26.59H237.22V80.39H218.57V9h31.38C268.19,9,278.68,18.14,278.68,34ZM261,34.65h0c0-7-4.38-10.8-11.92-10.8H237.22v21.9H249C256.57,45.75,261,41.88,261,34.65Zm26.93,45.74h18V25.32h-18ZM64.71,71.65H2.47V9H64.71Zm-15-21.12L23.39,24.23a19.2,19.2,0,0,0-5.88,5.88l26.3,26.25v0A19.2,19.2,0,0,0,49.67,50.52ZM68.23,75.16h-57v5.27H73.5V17.77H68.23Z"
      fill={color || theme.palettes.basic.secondary}
    />
  </svg>
);

Logo.propTypes = {
  color: string
};

export default Logo;
