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

const CompositionBar = ({
  barHeight,
  stats,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      <CompositionStyle>
        {
          stats.map(stat => (
            <CompositionItemStyle
              color={stat.color}
              height={barHeight}
              key={stat.type}
              percentage={stat.percentage}
              title={`${stat.count} ${stat.label}`}
            />
          ))
        }
      </CompositionStyle>
    </BaseStyle>
  );
};

CompositionBar.propTypes = {
  barHeight: number,
  stats: arrayOf(shape({
    color: string.isRequired,
    type: string.isRequired,
    percentage: number.isRequired,
    count: number.isRequired,
    label: string.isRequired
  })).isRequired
};

CompositionBar.defaultProps = {
  barHeight: 8
};

export default CompositionBar;
