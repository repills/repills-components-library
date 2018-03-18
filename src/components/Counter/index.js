import React from 'react';
import {
  number,
  string
} from 'prop-types';
import CompositionChart from '../CompositionChart';
import styled from 'styled-components';
import {
  base,
  content,
  box,
  count,
  label
} from './style';

const BaseStyle = styled.div`${base}`;
const ContentStyle = styled.div`${content}`;
const CountStyle = styled.div`${count}`;
const LabelStyle = styled.div`${label}`;
const BoxStyle = styled.div`${box}`;

const Counter = ({
  count,
  label,
  stats,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      <ContentStyle>
        <BoxStyle>
          <CountStyle>{count}</CountStyle>
          <LabelStyle>{label}</LabelStyle>
        </BoxStyle>
        <BoxStyle>
          <CompositionChart
            barWidth={8}
            maxHeight={44}
            stats={stats}
          />
        </BoxStyle>
      </ContentStyle>
    </BaseStyle>
  );
};

Counter.propTypes = {
  count: number,
  label: string,
  stats: CompositionChart.propTypes.stats
};

Counter.defaultProps = {
};

export default Counter;
