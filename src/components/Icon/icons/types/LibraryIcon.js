import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Icon';

const LibraryIcon = ({
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
        d="M75.67,33H23.92l2.1-3.5H73.57Zm2.1,3.5H21.82L19.72,40H79.86Zm-43.71,35a7,7,0,0,1,7-7h17.5a7,7,0,0,1,0,14H41A7,7,0,0,1,34.06,71.5Zm3.5,0A3.48,3.48,0,0,0,41.06,75H58.52a3.5,3.5,0,1,0,0-7H41.06A3.49,3.49,0,0,0,37.55,71.5Zm55.95-28V99.48H6.08V43.53l17.48-28h4.89V1.48h42.7V15.55H76ZM32,22.55h35.7V5H32Zm-21.59,21H89.22L73.92,19.05H71.16v7H28.46v-7H25.66ZM90,47H9.58V96H90Z"
      />
    </Icon>
  );
};

LibraryIcon.defaultProps = {
  color: 'currentColor'
};

LibraryIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default LibraryIcon;
