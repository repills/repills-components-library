import React from 'react';
import {
  number,
  string
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  count,
  label
} from './style';

const BaseStyle = styled.div`${base}`;
const CountStyle = styled.div`${count}`;
const LabelStyle = styled.div`${label}`;

const Counter = ({
  count,
  label,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      <CountStyle>{count}</CountStyle>
      <LabelStyle>{label}</LabelStyle>
    </BaseStyle>
  );
};

Counter.propTypes = {
  count: number,
  label: string,
};

Counter.defaultProps = {
};

export default Counter;
