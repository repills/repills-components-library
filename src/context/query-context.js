import React from 'react';
import { XS } from '../config/breakpoints';

const QueryContext = React.createContext(
  {
    [XS]: true
  }
);

export default QueryContext;