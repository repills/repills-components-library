import React from 'react';
import {
  number,
  arrayOf,
  shape,
  string
} from 'prop-types';
import styled from 'styled-components';
import { base, composition, compositionItem } from './style';

const BaseStyle = styled.div`${base}`;
const CompositionStyle = styled.div`${composition}`;
const CompositionItemStyle = styled.div`${compositionItem}`;

const CompositionChart = ({
  barWidth,
  maxHeight,
  stats
}) => {

  return (
    <BaseStyle>
      <CompositionStyle
        height={maxHeight}
      >
        { stats.map(stat => (
          <CompositionItemStyle
            color={stat.color}
            key={stat.type}
            percentage={stat.percentage}
            title={stat.count}
            width={barWidth}
          />
        ))}
      </CompositionStyle>
    </BaseStyle>
  );
};

CompositionChart.propTypes = {
  barWidth: number,
  maxHeight: number,
  stats: arrayOf(shape({
    color: string.isRequired,
    type: string.isRequired,
    percentage: number.isRequired,
    count: number.isRequired,
  })).isRequired
};

CompositionChart.defaultProps = {
  barWidth: 6,
  maxHeight: 25,
};

export default CompositionChart;
