import React from 'react';
import {
  number,
  func
} from 'prop-types';
import Pagination from '../Pagination';
import cx from 'classnames';
import { ContainerQuery } from 'react-container-query';
import { SM, query } from '../../config/breakpoints';

function ResponsivePagination({
  itemsTotalCount,
  currentPage,
  handleNavigateToPage,
  itemsPerPage,
  buildPagePath,
  ...others
}) {

  const getRangePageDisplayed = params => {

    let temp = 5;

    if (params.includes(SM)) {
      temp = 13;
    }

    return temp;
  };

  return (
    <ContainerQuery query={query}>
      {
        params => (
          <Pagination
            buildPagePath={buildPagePath}
            currentPage={currentPage}
            handleNavigateToPage={handleNavigateToPage}
            itemsPerPage={itemsPerPage}
            itemsTotalCount={itemsTotalCount}
            rangePageDisplayed={getRangePageDisplayed(cx(params))}
            {...others}
          />
        )
      }
    </ContainerQuery>
  );
}

ResponsivePagination.propTypes = {
  buildPagePath: func,
  currentPage: number.isRequired,
  handleNavigateToPage: func.isRequired,
  itemsPerPage: number.isRequired,
  itemsTotalCount: number.isRequired
};

export default ResponsivePagination;
