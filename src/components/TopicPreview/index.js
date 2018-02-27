import React from 'react';
import styled from 'styled-components';
import {
  string,
  arrayOf,
  object,
  func
} from 'prop-types';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import cx from 'classnames';
import CompositionChart from '../CompositionChart';
import {
  base,
  frame,
  counter,
  total,
  totalLabel,
  info,
  title
} from './style';
import { getResourcesStats } from '../../utils';

const BaseStyle = styled.article`${base}`;
const FrameStyle = styled.div`${frame}`;
const CounterStyle = styled.div`${counter}`;
const TotalStyle = styled.div`${total}`;
const TotalLabelStyle = styled.div`${totalLabel}`;
const InfoStyle = styled.div`${info}`;
const TitleStyle = styled.h4`${title}`;

function TopicPreview({
  navigateTo,
  resources,
  title
}) {
  const totalCount = resources.length;
  const stats = getResourcesStats(resources, true);
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            disabled={totalCount === 0}
            onClick={totalCount !== 0 ? navigateTo : null}
          >
            <FrameStyle>
              <CounterStyle className={cx(params)}>
                <TotalStyle>
                  {totalCount}
                </TotalStyle>
                <TotalLabelStyle>
                  Pill{totalCount !== 1 ? 's' : ''}
                </TotalLabelStyle>
              </CounterStyle>
              <InfoStyle className={cx(params)}>
                <CompositionChart
                  barWidth={6}
                  maxHeight={24}
                  stats={stats}
                />
                <TitleStyle className={cx(params)}>{title}</TitleStyle>
              </InfoStyle>
            </FrameStyle>
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
}

TopicPreview.propTypes = {
  navigateTo: func,
  resources: arrayOf(object).isRequired,
  title: string.isRequired
};

export default TopicPreview;
