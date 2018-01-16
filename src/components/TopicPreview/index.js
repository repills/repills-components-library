import React from 'react';
import styled from 'styled-components';
import { PillIcon } from '../Icon/icons/basic';
import { string } from 'prop-types';
import { base, frame, counter, total, totalLabel, bottom, title, composition } from './style';
import { getResourcesStats } from '../../utils/index';
import Icon from '../Icon';

const BaseStyle = styled.article`${base}`;
const FrameStyle = styled.div`${frame}`;
const CounterStyle = styled.div`${counter}`;
const TotalStyle = styled.div`${total}`;
const TotalLabelStyle = styled.div`${totalLabel}`;
const BottomStyle = styled.div`${bottom}`;
const TitleStyle = styled.h4`${title}`;
const CompositionStyle = styled.div`${composition}`;

function TopicPreview({ title, resources }) {
  const totalCount = resources.length;
  const stats = getResourcesStats(resources);
  return (
    <BaseStyle>
      <FrameStyle>
        <CounterStyle>
          <TotalStyle>
            {totalCount}
          </TotalStyle>
          <TotalLabelStyle>
            Pill{totalCount !== 1 ? 's' : ''}
          </TotalLabelStyle>
        </CounterStyle>
        <BottomStyle>
          <CompositionStyle>
            { stats.map(stat => (
              <PillIcon
                color={stat.color}
                key={stat.type}
              />
            ))}
          </CompositionStyle>
          <TitleStyle>{title}</TitleStyle>
        </BottomStyle>
      </FrameStyle>
    </BaseStyle>
  );
}

TopicPreview.propTypes = {
  title: string.isRequired,
  // resources: @TODO
};

export default TopicPreview;
