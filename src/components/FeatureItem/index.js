import React from 'react';
import {
  node,
  number,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.div`${base}`;

const FeatureItem = ({

}) => {

  return (
    <BaseStyle>
      TODO
    </BaseStyle>
  );
};

FeatureItem.propTypes = {

};

FeatureItem.defaultProps = {
};

export default FeatureItem;
