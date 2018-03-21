import React from 'react';
import styled from 'styled-components';
import CompositionBar from '../CompositionBar';
import {
  string,
  arrayOf,
  object,
  func
} from 'prop-types';
import {
  base,
  total,
  title,
  composition
} from './style';
import { getResourcesStats } from '../../utils';

const BaseStyle = styled.article`${base}`;
const TotalStyle = styled.div`${total}`;
const TitleStyle = styled.h4`${title}`;
const CompositionStyle = styled.div`${composition}`;

function TopicPreview({
  navigateTo,
  resources,
  title,
  ...others
}) {
  const totalCount = resources.length;
  const stats = getResourcesStats(resources, false, 'DESC');
  return (
    <BaseStyle
      {...others}
      disabled={totalCount === 0}
      onClick={totalCount !== 0 ? navigateTo : null}
    >
      <TitleStyle>{title}</TitleStyle>
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
  title: string.isRequired
};

export default TopicPreview;
