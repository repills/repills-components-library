import React from 'react';
import {
  node,
  number,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.div`${base}`;

const MaintainersList = ({
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

MaintainersList.displayName = 'MaintainersList';

MaintainersList.propTypes = {};

MaintainersList.defaultProps = {};

export default MaintainersList;
