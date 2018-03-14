import React from 'react';
import {
  number,
  arrayOf,
  shape,
  string
} from 'prop-types';
import styled from 'styled-components';
import { types } from 'repills-config';
import { base, composition, compositionItem } from './style';

const BaseStyle = styled.div`${base}`;
const CompositionStyle = styled.div`${composition}`;
const CompositionItemStyle = styled.div`${compositionItem}`;

const CompositionChart = ({
  barWidth,
  maxHeight,
  stats,
  ...others
}) => {

  const partials = stats.map(e => e.type);
  const rest = Object.keys(types).reduce((acc,key) => {
    acc.push(key);
    return acc;
  }, []).filter(e => (!partials.includes(e) && e.indexOf('_') === -1));

  return (
    <BaseStyle
      {...others}
    >
      <CompositionStyle
        height={maxHeight}
      >
        {
          stats.map(stat => (
            <CompositionItemStyle
              color={stat.color}
              key={stat.type}
              percentage={stat.percentage}
              title={`${stat.count} ${stat.label}`}
              width={barWidth}
            />
          ))
        }
        {
          rest.map(key => (
            <CompositionItemStyle
              key={key}
              percentage={0}
              width={barWidth}
            />
          ))
        }
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
    label: string.isRequired
  })).isRequired
};

CompositionChart.defaultProps = {
  barWidth: 6,
  maxHeight: 25,
};

export default CompositionChart;
