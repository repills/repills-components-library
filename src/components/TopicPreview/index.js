import React from 'react';
import styled from 'styled-components';
import { PillIcon } from '../Icon/icons/basic';
import { string } from 'prop-types';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import cx from 'classnames';
import { base, frame, counter, total, totalLabel, info, title, composition } from './style';
import { getResourcesStats } from '../../utils/index';

const BaseStyle = styled.article`${base}`;
const FrameStyle = styled.div`${frame}`;
const CounterStyle = styled.div`${counter}`;
const TotalStyle = styled.div`${total}`;
const TotalLabelStyle = styled.div`${totalLabel}`;
const InfoStyle = styled.div`${info}`;
const TitleStyle = styled.h4`${title}`;
const CompositionStyle = styled.div`${composition}`;

function TopicPreview({ title, resources }) {
  const totalCount = resources.length;
  const stats = getResourcesStats(resources);
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            disabled={totalCount === 0}
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
                    <PillIcon
                      color={stat.color}
                      key={stat.type}
                      size={14}
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
  title: string.isRequired,
  // resources: @TODO
};

export default TopicPreview;
