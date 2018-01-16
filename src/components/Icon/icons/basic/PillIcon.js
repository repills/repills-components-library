import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Icon';

const PillIcon = ({
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
        d="M50,1h0A49,49,0,1,0,99,50,49,49,0,0,0,50,1ZM65.9,75.08V75l-41-40.94a30,30,0,0,1,9.17-9.17l41,41a30,30,0,0,1-9.16,9.19Z"
      />
    </Icon>
  );
};

PillIcon.defaultProps = {
  color: 'currentColor'
};

PillIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default PillIcon;
