import React from 'react';
import QueryContext from '../context/query-context';

const ConsumeContainerQuery = Component => {
  const Wrapper = props => (
    <QueryContext.Consumer>
      {
        query => (
          <Component
            {...props}
            breakpointsStatus={query}
          />
        )
      }
    </QueryContext.Consumer>
  );
  Wrapper.displayName = Component.displayName || Component.name;
  return Wrapper;
};

export default ConsumeContainerQuery;
