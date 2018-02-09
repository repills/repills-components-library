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
import { base, frame, counter, total, totalLabel, info, title, composition, compositionItem } from './style';
import { getResourcesStats } from '../../utils/index';

const BaseStyle = styled.article`${base}`;
const FrameStyle = styled.div`${frame}`;
const CounterStyle = styled.div`${counter}`;
const TotalStyle = styled.div`${total}`;
const TotalLabelStyle = styled.div`${totalLabel}`;
const InfoStyle = styled.div`${info}`;
const TitleStyle = styled.h4`${title}`;
const CompositionStyle = styled.div`${composition}`;
const CompositionItemStyle = styled.div`${compositionItem}`;

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
            onClick={navigateTo}
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
                <CompositionStyle>
                  { stats.map(stat => (
                    <CompositionItemStyle
                      color={stat.color}
                      key={stat.type}
                      percentage={stat.percentage}
                      title={stat.count}
                    />
                  ))}
                </CompositionStyle>
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
  path: string,
  resources: arrayOf(object).isRequired,
  title: string.isRequired
};

export default TopicPreview;
