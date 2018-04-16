import React from 'react';
import {
  func,
  object,
  oneOfType
} from 'prop-types';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';

const QueryHandler = Component => {
  const Wrapper = props => (
    <ContainerQuery query={query}>
      { params => <Component {...props} breakpointsStatus={params} /> }
    </ContainerQuery>
  );
  Wrapper.displayName = Component.displayName || Component.name;
  return Wrapper;
};

export default QueryHandler;
