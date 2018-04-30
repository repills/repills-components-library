import React from 'react';
import styled from 'styled-components';
import CompositionBar from '../CompositionBar';
import {
  string,
  arrayOf,
  object,
  func,
  number,
  shape
} from 'prop-types';
import {
  base,
  total,
  title,
  composition
} from './style';

const BaseStyle = styled.article`${base}`;
const TotalStyle = styled.div`${total}`;
const TitleStyle = styled.h4`${title}`;
const CompositionStyle = styled.div`${composition}`;

function TopicPreview({
  navigateTo,
  resources,
  title,
  stats,
  ...others
}) {
  const totalCount = resources.length;
  return (
    <BaseStyle
      {...others}
      disabled={totalCount === 0}
      onClick={totalCount !== 0 ? navigateTo : null}
    >
      <TitleStyle title={title}>{title}</TitleStyle>
      <TotalStyle>
        {totalCount}
      </TotalStyle>
      <CompositionStyle>
        <CompositionBar
          barHeight={4}
          stats={stats}
        />
      </CompositionStyle>
    </BaseStyle>
  );
}

TopicPreview.propTypes = {
  navigateTo: func,
  resources: arrayOf(object).isRequired,
  stats: arrayOf(shape({
    type: string.isRequired,
    label: string.isRequired,
    color: string.isRequired,
    count: number.isRequired,
    percentage: number.isRequired
  })),
  title: string.isRequired,
};

export default TopicPreview;
