import React from 'react';
import {
  node,
  number,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.div`${base}`;

const TopicPageHeader = ({

}) => {

  return (
    <BaseStyle>
      TODO
    </BaseStyle>
  );
};

TopicPageHeader.displayName = 'TopicPageHeader';

TopicPageHeader.propTypes = {};

TopicPageHeader.defaultProps = {};

export default TopicPageHeader;
