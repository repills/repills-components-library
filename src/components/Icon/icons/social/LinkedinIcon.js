import React from 'react';
import { string } from 'prop-types';
import Base from '../Base';
import theme from '../../../../config/theme';

const LinkedinIcon = ({
  color,
  ...options
}) => {
  return (
    <Base
      color={color ? color : theme.palettes.social.linkedin}
      path="M91.76,1H8.24A7.13,7.13,0,0,0,1,8V92a7.14,7.14,0,0,0,7.24,7H91.76A7.13,7.13,0,0,0,99,92V8A7.13,7.13,0,0,0,91.76,1ZM30.71,83H15.9V38.79H30.71Zm-7.4-50.29h-.1c-5,0-8.18-3.4-8.18-7.65s3.31-7.64,8.38-7.64,8.18,3.3,8.28,7.64S28.47,32.74,23.31,32.74ZM84.09,83H69.28V59.36c0-5.95-2.14-10-7.5-10a8.09,8.09,0,0,0-7.59,5.38,9.89,9.89,0,0,0-.49,3.58V83H38.9s.19-40.1,0-44.25H53.7v6.27A14.7,14.7,0,0,1,67,37.75c9.74,0,17,6.32,17,19.92Z"
      {...options}
    />
  );
};

LinkedinIcon.propTypes = {
  color: string
};

export default LinkedinIcon;
