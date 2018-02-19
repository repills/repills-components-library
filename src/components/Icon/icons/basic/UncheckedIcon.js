import React from 'react';
import Base from '../Base';

const UncheckedIcon = options => {
  return (
    <Base
      path="M50,1A49,49,0,1,0,99,50,49,49,0,0,0,50,1Zm0,88A39,39,0,1,1,89,50,39,39,0,0,1,50,89Z"
      {...options}
    />
  );
};

export default UncheckedIcon;
