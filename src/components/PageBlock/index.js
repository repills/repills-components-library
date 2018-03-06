import React from 'react';
import {
  string,
  element,
  number
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  count,
  title,
  body
} from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h2`${title}`;
const BodyStyle = styled.div`${body}`;
const ContentsCountStyle = styled.div`${count}`;

const PageBlock = ({
  title,
  children,
  contentsCount,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      <TitleStyle>
        <span>{title}</span>
        {
          contentsCount &&
          <ContentsCountStyle>{contentsCount}</ContentsCountStyle>
        }
      </TitleStyle>
      <BodyStyle>
        {children}
      </BodyStyle>
    </BaseStyle>
  );
};

PageBlock.propTypes = {
  children: element,
  contentsCount: number,
  title: string
};

export default PageBlock;
