import React from 'react';
import { applyContainerQuery } from 'react-container-query';
import { query } from '../config/breakpoints';
import QueryContext from '../context/query-context';

const ProvideContainerQuery = Component => {
  const Container = props => {
    return (
      <QueryContext.Provider value={props.containerQuery}>
        <Component
          {...props}
        />
      </QueryContext.Provider>
    );
  };
  const withContainerQuery = applyContainerQuery(Container, query);
  withContainerQuery.displayName = Component.displayName || Component.name;
  return withContainerQuery;
};

export default ProvideContainerQuery;
