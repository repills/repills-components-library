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
  info,
  title,
  composition
} from './style';
import { getResourcesStats } from '../../utils';

const BaseStyle = styled.article`${base}`;
const FrameStyle = styled.div`${frame}`;
const CounterStyle = styled.div`${counter}`;
const TotalStyle = styled.div`${total}`;
const InfoStyle = styled.div`${info}`;
const TitleStyle = styled.h4`${title}`;
const CompositionStyle = styled(CompositionChart)`${composition}`;

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
              <InfoStyle className={cx(params)}>
                <TitleStyle className={cx(params)}>{title}</TitleStyle>
              </InfoStyle>
              <CounterStyle className={cx(params)}>
                <TotalStyle>
                  {totalCount}
                </TotalStyle>
                <CompositionStyle
                  barWidth={4}
                  className={cx(params)}
                  maxHeight={20}
                  stats={stats}
                />
              </CounterStyle>
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
