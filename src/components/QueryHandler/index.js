import React from 'react';
import {
  func,
  object,
  oneOfType
} from 'prop-types';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';

function QueryHandler({
  component,
  componentProps
}) {

  return (
    <ContainerQuery query={query}>
      {
        params => {
          const Component = component;
          return (
            <Component
              {...componentProps}
              breakpointsStatus={params}
            />
          );
        }
      }
    </ContainerQuery>
  );
}

QueryHandler.propTypes = {
  component: oneOfType([func, object]).isRequired,
  componentProps: object
};

export default QueryHandler;
