import React from 'react';
import {
  string
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  title,
  main
} from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h1`${title}`;
const MainStyle = styled.div`${main}`;

const SimplePageHeader = ({
  title,
  ...others
}) => {
  return (
    <BaseStyle
      {...others}
    >
      <MainStyle>
        <TitleStyle dangerouslySetInnerHTML={{ __html: title }} />
      </MainStyle>
    </BaseStyle>
  );
};

SimplePageHeader.propTypes = {
  title: string
};

export default SimplePageHeader;
