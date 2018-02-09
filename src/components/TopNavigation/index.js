import React from 'react';
import styled from 'styled-components';
import {
  string,
  arrayOf,
  object,
  func
} from 'prop-types';
import { base, frame, counter, total, totalLabel, info, title, composition } from './style';

const BaseStyle = styled.nav`${base}`;

function TopNavigation({
}) {
  return (
    <BaseStyle>
      Top Navigation here
    </BaseStyle>
  );
}

TopNavigation.propTypes = {
};

export default TopNavigation;
