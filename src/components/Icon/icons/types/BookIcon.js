import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Icon';

const BookIcon = ({
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
        d="M82.65,4.63h1.83V1H24.57a9,9,0,0,0-9,9.07v78A10.88,10.88,0,0,0,26.39,99h58.1V15.52H82.65a5.44,5.44,0,0,1,0-10.89Zm-58.08,0H75.41A11.17,11.17,0,0,0,73.59,10a12.35,12.35,0,0,0,1.81,5.54H24.57a5.44,5.44,0,0,1,0-10.89ZM30,95.37H26.39a7.23,7.23,0,0,1-7.24-7.23V17.34a9,9,0,0,0,5.42,1.81H30ZM80.85,19.15V95.37H33.67V19.15H80.85Z"
      />
    </Icon>
  );
};

BookIcon.defaultProps = {
  color: 'currentColor'
};

BookIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default BookIcon;
