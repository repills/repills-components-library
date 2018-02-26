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
  itemsPerPage
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
            currentPage={currentPage}
            handleNavigateToPage={handleNavigateToPage}
            itemsPerPage={itemsPerPage}
            itemsTotalCount={itemsTotalCount}
            rangePageDisplayed={getRangePageDisplayed(cx(params))}
          />
        )
      }
    </ContainerQuery>
  );
}

ResponsivePagination.propTypes = {
  currentPage: number.isRequired,
  handleNavigateToPage: func.isRequired,
  itemsPerPage: number.isRequired,
  itemsTotalCount: number.isRequired
};

export default ResponsivePagination;
