import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Icon';

const VideoIcon = ({
  color,
  size
}) => {
  return (
    <Icon
      color={color}
      size={size}
    >
      <path
        fill={color}
        d="M62.7,1H22.79a7.28,7.28,0,0,0-7.27,7.29V91.71A7.26,7.26,0,0,0,22.77,99H77.23a7.25,7.25,0,0,0,7.25-7.23V26.41Zm0,5.44,17.06,20H66.32a3.65,3.65,0,0,1-3.62-3.66ZM80.85,91.76a3.62,3.62,0,0,1-3.63,3.61H22.78a3.64,3.64,0,0,1-3.63-3.61V8.24a3.64,3.64,0,0,1,3.61-3.61H59.07V22.76A7.24,7.24,0,0,0,66.33,30H80.85ZM26.41,88.11H73.59V48.19H26.41Zm39.93-36.3H70v3.63H66.33Zm0,7.26H70V62.7H66.33Zm0,7.26H70V70H66.33Zm0,7.26H70v3.63H66.33Zm0,7.26H70v3.63H66.33Zm-29-29H62.7V66.33H37.3ZM37.3,70H62.7V84.48H37.3ZM30,51.81h3.63v3.63H30Zm0,7.26h3.63V62.7H30Zm0,7.26h3.63V70H30Zm0,7.26h3.63v3.63H30Zm0,7.26h3.63v3.63H30Z"
      />
    </Icon>
  );
};

VideoIcon.defaultProps = {
  color: 'currentColor'
};

VideoIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default VideoIcon;
