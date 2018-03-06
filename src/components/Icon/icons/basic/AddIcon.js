import React from 'react';
import Base from '../Base';

const AddIcon = options => {
  return (
    <Base
      path="M50,99A49,49,0,0,1,15.3,15.41l.12-.12a49,49,0,0,1,69.3,69.29A48.67,48.67,0,0,1,50,99ZM50,7.42A42.71,42.71,0,0,0,19.81,80.32,42.7,42.7,0,0,0,80.2,19.93,42.43,42.43,0,0,0,50,7.42Zm0,62.53a3.15,3.15,0,0,1-3.15-3.15V53.27H33.33a3.15,3.15,0,0,1,0-6.29H46.86V33.45a3.15,3.15,0,1,1,6.3,0V47H66.68a3.15,3.15,0,0,1,0,6.29H53.15V66.8A3.15,3.15,0,0,1,50,69.94Z"
      {...options}
    />
  );
};

export default AddIcon;
