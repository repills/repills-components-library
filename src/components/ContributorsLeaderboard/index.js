import React from 'react';
import {
  node,
  number,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.div`${base}`;

const ContributorsLeaderboard = ({
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      TODO
    </BaseStyle>
  );
};

ContributorsLeaderboard.propTypes = {

};

ContributorsLeaderboard.defaultProps = {
};

export default ContributorsLeaderboard;
