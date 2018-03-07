import React from 'react';
import { string } from 'prop-types';
import Base from '../Base';
import theme from '../../../../config/theme';

const FacebookIcon = ({
  color,
  ...options
}) => {
  return (
    <Base
      color={color ? color : theme.palettes.social.facebook}
      path="M91.76,1H8.24A7.13,7.13,0,0,0,1,8V92a7.14,7.14,0,0,0,7.24,7H91.76A7.13,7.13,0,0,0,99,92V8A7.13,7.13,0,0,0,91.76,1Zm-8,28.61H75.95c-6.14,0-7.33,2.92-7.33,7.2v9.44H83.26L81.36,61H68.62V99H53.34V61H40.57V46.26H53.34V35.35c0-12.66,7.73-19.55,19-19.55a104.7,104.7,0,0,1,11.41.58Z"
      {...options}
    />
  );
};

FacebookIcon.propTypes = {
  color: string
};

export default FacebookIcon;
