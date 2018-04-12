import React from 'react';
import {
  number,
  func
} from 'prop-types';
import paginate from 'simple-pagination';
import styled from 'styled-components';
import { ArrowIcon } from '../Icon/icons/basic';

import {
  base,
  button
} from './style';

const BaseStyle = styled.div`${base}`;
const ButtonStyle = styled.a`${button}`;

// @TODO: convert to Class

function Pagination({
  currentPage,
  handleNavigateToPage,
  itemsPerPage,
  itemsTotalCount,
  rangePageDisplayed,
  buildPagePath,
  ...others
}) {
  const ButtonStyle = styled[buildPagePath ? 'a' : 'button']`${button}`;

  const pagination = paginate(itemsTotalCount, itemsPerPage, currentPage);

  const pages = [];
  const pageCount = pagination.pageCount;

  const getPage = index => ({
    index,
    active: index === currentPage
  });

  const navigateTo = index => e => {
    e.preventDefault();
    e.stopPropagation();
    handleNavigateToPage(index);
  };

  let showLeftBreak = false;
  let showRightBreak = false;

  if (pageCount <= rangePageDisplayed) {

    for (let index = 0; index < pagination.pageCount; index++) {
      pages[index] = getPage(index + 1);
    }

  } else {

    let leftSide  = rangePageDisplayed / 2;
    let rightSide = rangePageDisplayed - leftSide;

    showLeftBreak = currentPage - leftSide > 0;
    showRightBreak = currentPage + leftSide <  pageCount;

    if (currentPage > pageCount - rangePageDisplayed / 2) {
      rightSide = pageCount - currentPage;
      leftSide = rangePageDisplayed - rightSide;
    } else if (currentPage < rangePageDisplayed / 2) {
      leftSide = currentPage;
      rightSide = rangePageDisplayed - leftSide;
    }

    for (let i = 0; i < pageCount; i++) {

      const pageIndex = i + 1;

      if ((pageIndex >= currentPage - leftSide) && (pageIndex <= currentPage + rightSide)) {
        pages[i] = getPage(pageIndex);
      }
    }
  }

  return (
    pageCount > 1 &&
    <BaseStyle
      {...others}
    >
      {
        (pageCount > rangePageDisplayed) &&
        <ButtonStyle
          disabled={!pagination.previousPage}
          href={buildPagePath && buildPagePath(1)}
          onClick={navigateTo(1)}
        >
          <ArrowIcon
            orientation="left"
            size={16}
          />
        </ButtonStyle>
      }
      {
        showLeftBreak &&
        <ButtonStyle>...</ButtonStyle>
      }
      {
        pages.map(page =>
          <ButtonStyle
            active={page.active}
            href={buildPagePath && buildPagePath(page.index)}
            key={`page-${page.index}`}
            onClick={navigateTo(page.index)}
          >
            {page.index}
          </ButtonStyle>
        )
      }
      {
        showRightBreak &&
        <ButtonStyle>...</ButtonStyle>
      }
      {
        (pageCount > rangePageDisplayed) &&
        <ButtonStyle
          disabled={!pagination.nextPage}
          href={buildPagePath && buildPagePath(pageCount)}
          onClick={() => navigateTo(pageCount)}
        >
          <ArrowIcon
            orientation="right"
            size={16}
          />
        </ButtonStyle>
      }
    </BaseStyle>
  );
}

Pagination.propTypes = {
  buildPagePath: func,
  currentPage: number.isRequired,
  handleNavigateToPage: func.isRequired,
  itemsPerPage: number.isRequired,
  itemsTotalCount: number.isRequired,
  rangePageDisplayed: number
};

Pagination.defaultProps = {
  rangePageDisplayed: 7
};

export default Pagination;
