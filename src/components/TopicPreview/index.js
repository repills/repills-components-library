import React from 'react';
import styled from 'styled-components';
import {
  string,
  arrayOf,
  object,
  func
} from 'prop-types';
import {
  base,
  total,
  title
} from './style';

const BaseStyle = styled.article`${base}`;
const TotalStyle = styled.div`${total}`;
const TitleStyle = styled.h4`${title}`;

function TopicPreview({
  navigateTo,
  resources,
  title,
  ...others
}) {
  const totalCount = resources.length;
  return (
    <BaseStyle
      {...others}
      disabled={totalCount === 0}
      onClick={totalCount !== 0 ? navigateTo : null}
    >
      <TitleStyle title={title}>{title}</TitleStyle>
      <TotalStyle>
        {totalCount}
      </TotalStyle>
    </BaseStyle>
  );
}

TopicPreview.displayName = 'TopicPreview';

TopicPreview.propTypes = {
  navigateTo: func,
  resources: arrayOf(object).isRequired,
  title: string.isRequired,
};

export default TopicPreview;
