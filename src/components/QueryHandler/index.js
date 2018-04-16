import React from 'react';
import {
  func,
  object,
  oneOfType
} from 'prop-types';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';

function QueryHandler({
  children
}) {

  return (
    <ContainerQuery query={query}>
      { params => React.cloneElement(children, { breakpointsStatus: params }) }
    </ContainerQuery>
  );
}

QueryHandler.propTypes = {
  children: oneOfType([func, object]).isRequired
};

export default QueryHandler;
